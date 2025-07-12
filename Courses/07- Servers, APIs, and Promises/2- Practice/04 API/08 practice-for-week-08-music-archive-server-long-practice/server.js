const http = require('http');
const fs = require('fs');
const { error } = require('console');

/* ============================ SERVER DATA ============================ */
let artistsData = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albumsData = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songsData = JSON.parse(fs.readFileSync('./seeds/songs.json'));


let artists = Object.values(artistsData);
let albums = Object.values(albumsData);
let songs = Object.values(songsData);

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody); // convert JSON to JS Object
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here

    // Get all artists
    if (req.method === "GET" && req.url === "/artists") {

      res.writeHead(200,{"content-type": "application/json"});
      res.end(JSON.stringify(artists));
    }
    // "Get a specific artist's details based on artistId"
    if (req.method === "GET" && req.url.startsWith("/artists/")) {
      const urlParts = req.url.split("/"); // [ '', 'artists', '1' ]
      const artistId = Number(urlParts[2]);

      const artist = artists.find(artist => artist.artistId === artistId);
      if (!artist) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Artist not found" }));
        return;
      }

      const artistAlbums = albums.filter(album => album.artistId === artistId);

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({
        ...artist,
        albums: artistAlbums
      }));
      return;
    }
    // Add an artist
    if (req.method === "POST" && req.url === "/artists") {
      if (!req.body.name) {
        res.writeHead(402);
        res.end(JSON.stringify({error: "Artist name is required"}));
        return;
      }

      let newArtistId = getNewArtistId();

      const newArtist = {
        artistId: newArtistId,
        name : req.body.name
      };
      
      artistsData[newArtistId] = newArtist;

      
      artists.push(newArtist);

      res.writeHead(201,{"content-type" : "application/json"})
    
      res.end(JSON.stringify(newArtist));
    }
    
    // Edit a specified artist by artistId
    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/artists")) {
      const urlParts = req.url.split("/");  // {"","artists","id"}
      const artistId = Number(urlParts[2]);



    }


    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));