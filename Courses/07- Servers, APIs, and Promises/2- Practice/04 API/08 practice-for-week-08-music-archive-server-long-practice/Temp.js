const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));

let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));
let error = JSON.parse(fs.readFileSync("./seeds/errors.json"));
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
          req.body = JSON.parse(reqBody);
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
    let urlParts = req.url.split("/")
    // Your code here

    //"Get all the artists"
    if(req.method === "GET" && req.url === "/artists"){
     res.statusCode = 200
     res.setHeader("Content-Type","application/json")
      res.body = JSON.stringify(artists)
      res.end(res.body);
      return;
    }
    // "Get a specific artist's details based on artistId"
    if(req.method === "GET" && req.url.startsWith("/artists/") && urlParts.length === 3){
      const currentArtistId = urlParts[2];
      let currentArtist = artists[currentArtistId]
      console.log(currentArtist)
    


      if(currentArtist === undefined){
        
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")


        error.statusCode = res.statusCode
        error.message = "Artist not found"

        res.body = JSON.stringify(error);
        res.end(res.body)
        return;
      }

   
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json")

        res.body = JSON.stringify(currentArtist)
        res.end(res.body)
        return;
      

    }

    //  "Add an artist"
    if(req.method === "POST" && req.url === "/artists" ){
      if (!req.body.name) { res.statusCode = 422; return res.end() }

      let newArtistId = getNewArtistId()

      let newArtistName = req.body.name

      artists[newArtistId] = 
      { 
        artistsId: newArtistId,
         name: newArtistName
        
      }

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json")
      res.body = artists[newArtistId];
      res.end(JSON.stringify(res.body));
      return;
    }
    if((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/artists") 
      && urlParts.length === 3){
      if(req.body.name){
        const currentArtistId = urlParts[2];
        let currentArtist = artists[currentArtistId]

        if(currentArtist){
          currentArtist.name = req.body.name;
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json")
          res.body = currentArtist;
          res.end(JSON.stringify(res.body));
          return;
        }
      }
    }
    //"Delete a specified artist by artistId",
    if (req.method === "DELETE" && req.url.startsWith("/artists") && urlParts.length === 3){
      const currentArtistId = urlParts[2];
      let currentArtist = artists[currentArtistId]
      if(currentArtist){
        delete artists[currentArtistId]
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.body = { message: "Successfully deleted"}
        res.end(JSON.stringify(res.body));
        return;
      }
    }
    
    //get albums by artist Id
    if(req.method === "GET" && req.url.startsWith("/artists") && req.url.endsWith("/albums") && urlParts.length === 4){
      const currentArtistId = urlParts[2];
      let currentArtist = artists[currentArtistId]

      //error handling
      if (currentArtist === undefined) {

        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")


        error.statusCode = res.statusCode
        error.message = "Artist not found"

        res.body = JSON.stringify(error);
        res.end(res.body)
        return;
      }



        const albumsByArtistId = 
          Object.values(albums).filter((value) => value.artistId === Number(currentArtistId))
     
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.body = albumsByArtistId
        res.end(JSON.stringify(res.body));
        return;
    }

    if(req.method === "GET" && req.url.startsWith("/albums/") && urlParts.length === 3){
      const currentAlbumId = urlParts[2];
      let currentAlbum = albums[currentAlbumId];

      if(currentAlbum){
        let currentArtistId = currentAlbum.artistId
       
        let currentArtist = artists[currentArtistId]
        const songsByAlbumId = Object.values(songs).filter((value) => value.albumId ===Number(currentAlbumId));
      
        
       
        const albumDetails = { ...currentAlbum,artist :{...currentArtist},songs: songsByAlbumId};
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.body = albumDetails;
        res.end(JSON.stringify(res.body));
        return;
      }
    }

    if(req.method === "POST" && req.url.startsWith("/artists/") && req.url.endsWith("/albums") && urlParts.length === 4) {
      if (!req.body.name) { res.statusCode = 422; return res.end() }
      const currentArtistId = urlParts[2];
      let currentArtist = artists[currentArtistId]
      if(currentArtist){
        
          let newAlbumId = getNewAlbumId();

          let newAlbumname = req.body.name;

          albums[newAlbumId] = {
            albumId : newAlbumId,
            name : newAlbumname,
            artistId: Number(currentArtistId)
          }
          res.statusCode = 201;
          res.setHeader("Content-Type", "application/json")
          res.body = albums[newAlbumId];
          res.end(JSON.stringify(res.body));
          return;



        }
      
    }


    if ((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/albums/") && urlParts.length === 3) {
      if(!req.body.name){ res.statusCode = 422; return res.end()}

      const currentAlbumId = urlParts[2];
      let currentAlbum = albums[currentAlbumId];
      if(currentAlbum){
       

          currentAlbum.name = req.body.name

          res.statusCode = 200

          res.setHeader("Content-Type","application/json")

          res.body = currentAlbum;

          res.end(JSON.stringify(res.body))
          return;
      
      }
    }

    if (req.method === "DELETE" && req.url.startsWith("/albums/") && urlParts.length === 3){

       const currentAlbumId = urlParts[2];
      let currentAlbum = albums[currentAlbumId];

      if(currentAlbum){
        delete albums[currentAlbumId];
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.body = { message: "Successfully deleted" }
        res.end(JSON.stringify(res.body));
        return;
      }
    }

  if(req.method ==="GET" && req.url.startsWith("/artists/") && req.url.endsWith("/songs") && urlParts.length === 4){
    const currentArtistId = urlParts[2];
    let currentArtist = artists[currentArtistId]



    if (currentArtist === undefined) {

      res.statusCode = 404
      res.setHeader("Content-Type", "application/json")


      error.statusCode = res.statusCode
      error.message = "Artist not found"

      res.body = JSON.stringify(error);
      res.end(res.body)
      return;
    }


    if(currentArtist){
      const albumsByArtistId = Object.values(albums)
        .filter((album) => album.artistId === Number(currentArtistId))
        .map(album => album.albumId)
      // Filter songs based on the artist's albums
      const songsByArtistId = Object.values(songs)
        .filter(song => albumsByArtistId.includes(song.albumId));
      res.body = songsByArtistId;
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(res.body));
      return;

    } 
  }



    if (req.method === "GET" && req.url.startsWith("/albums/") && req.url.endsWith("/songs") && urlParts.length === 4) {
      const currentAlbumId = urlParts[2];
      let currentAlbum = artists[currentAlbumId]



      if (currentAlbum === undefined) {

        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")


        error.statusCode = res.statusCode
        error.message = "Album not found"

        res.body = JSON.stringify(error);
        res.end(res.body)
        return;
      }


      if (currentAlbum) {
        const songsByAlbumId = Object.values(songs).filter((value) => value.albumId === Number(currentAlbumId));
        res.body = songsByAlbumId;
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(res.body));
        return;

      }
    }

    if (req.method === "GET" && req.url.startsWith("/tracknumbers/") && req.url.endsWith("/songs") && urlParts.length === 4) {
      const currentTrackNumber = urlParts[2]
      const songsByTrackNumber = Object.values(songs).filter((song) => song.trackNumber === Number(currentTrackNumber));
      res.body = songsByTrackNumber
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(res.body));
      return;


    }


    if(req.method ==="GET" && req.url.startsWith("/songs") && urlParts.length === 3){
      const currentSongId = urlParts[2];
      let currentSong = songs[currentSongId];


      if(!currentSong) {
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")


        error.statusCode = res.statusCode
        error.message = "Song not found"

        res.body = JSON.stringify(error);
        res.end(res.body)
        return
      }


      if(currentSong){
      let songAlbum = albums[currentSong.albumId];
      let songArtist = artists[songAlbum.artistId];

      songDetails = {
        ...currentSong, album: songAlbum, artist: songArtist
      }
      res.body = songDetails;
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(res.body));
      return;
    }
  }
  if(req.method === "POST" && req.url.startsWith("/albums/") && req.url.endsWith("/songs") && urlParts.length === 4){


  
    const currentAlbumId = urlParts[2];
    let currentAlbum = artists[currentAlbumId]



    if (!req.body.name || !req.body.lyrics || !req.body.trackNumber) {
      res.statusCode = 422;
      res.end();
      return
    }

    if (!currentAlbum) {

      res.statusCode = 404
      res.setHeader("Content-Type", "application/json")


      error.statusCode = res.statusCode
      error.message = "Album not found"

      res.body = JSON.stringify(error);
      res.end(res.body)
      return;
    }


        let newSongId = getNewSongId()
        songs[newSongId] = {
          songId: newSongId,
          name: req.body.name,
          trackNumber: req.body.trackNumber,
          albumId: currentAlbumId,
          lyrics: req.body.lyrics
        }
        req.body = songs[newSongId];
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(res.body));
        return;
    
    
  }


  if((req.method === "PUT" || req.method === "PATCH") && req.url.startsWith("/songs") && urlParts.length === 3){
  
    const currentSongId = urlParts[2];
    let currentSong = songs[currentSongId]
    if (!req.body.name && !req.body.lyrics && !req.body.trackNumber) {
      res.statusCode = 422;
      res.end();
      return
    }
    if (!currentSong) {
      res.statusCode = 404
      res.setHeader("Content-Type", "application/json")


      error.statusCode = res.statusCode
      error.message = "Song not found"

      res.body = JSON.stringify(error);
      res.end(res.body)
      return
    }


    if(currentSong){
      if(req.body.name) currentSong.name = req.body.name
      if(req.body.lyrics) currentSong.lyrics = req.body.lyrics
      if(req.body.trackNumber) currentSong.trackNumber = req.body.trackNumber
      res.body = currentSong;
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(res.body));
      return;

    }
  }



    if (req.method === "DELETE" && req.url.startsWith("/songs") && urlParts.length === 3) {
      const currentSongId = urlParts[2];
      let currentSong = songs[currentSongId]
      if (!currentSong) {
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")


        error.statusCode = res.statusCode
        error.message = "Song not found"

        res.body = JSON.stringify(error);
        res.end(res.body)
        return
      }

      if(currentSong){
        delete songs[currentSongId]
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.body = { message: "Successfully deleted" }
        res.end(JSON.stringify(res.body));
        return;
      }

    }


    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log('Server is listening on port', port));