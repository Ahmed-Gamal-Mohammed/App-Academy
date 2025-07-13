const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artistsData = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albumsData = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songsData = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let artists = Object.values(artistsData);
let albums = Object.values(albumsData);
let songs = Object.values(songsData);

let nextArtistId = Math.max(...artists.map(a => a.artistId)) + 1;
let nextAlbumId = Math.max(...albums.map(a => a.albumId)) + 1;
let nextSongId = Math.max(...songs.map(s => s.songId)) + 1;

function getNewArtistId() {
  return nextArtistId++;
}
function getNewAlbumId() {
  return nextAlbumId++;
}
function getNewSongId() {
  return nextSongId++;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if (reqBody) {
      switch (req.headers['content-type']) {
        case 'application/json':
          req.body = JSON.parse(reqBody);
          break;
        case 'application/x-www-form-urlencoded':
          req.body = reqBody
            .split('&')
            .map(pair => pair.split('='))
            .map(([k, v]) => [k, decodeURIComponent(v.replace(/\+/g, ' '))])
            .reduce((acc, [k, v]) => ((acc[k] = v), acc), {});
          break;
        default:
          break;
      }
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // GET all artists
    if (req.method === 'GET' && req.url === '/artists') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(artists));
    }

    // GET specific artist
    if (req.method === 'GET' && req.url.startsWith('/artists/') && !req.url.includes('/albums') && !req.url.includes('/songs')) {
      const artistId = Number(req.url.split('/')[2]);
      const artist = artists.find(a => a.artistId === artistId);

      if (!artist) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Artist not found' }));
      }

      const artistAlbums = albums.filter(album => album.artistId === artistId);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ ...artist, albums: artistAlbums }));
    }

    // POST new artist
    if (req.method === 'POST' && req.url === '/artists') {
      if (!req.body?.name) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Artist name is required' }));
      }

      const newArtist = {
        artistId: getNewArtistId(),
        name: req.body.name,
      };

      artists.push(newArtist);
      fs.writeFileSync('./seeds/artists.json', JSON.stringify(artists, null, 2));

      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(newArtist));
    }

    // PUT/PATCH update artist
    if ((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/artists/')) {
      const artistId = Number(req.url.split('/')[2]);
      const artist = artists.find(a => a.artistId === artistId);

      if (!artist) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Artist not found' }));
      }

      if (req.body?.name !== undefined) artist.name = req.body.name;

      fs.writeFileSync('./seeds/artists.json', JSON.stringify(artists, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(artist));
    }

    // DELETE artist
    if (req.method === 'DELETE' && req.url.startsWith('/artists/')) {
      const artistId = Number(req.url.split('/')[2]);
      const artist = artists.find(a => a.artistId === artistId);

      if (!artist) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Artist not found' }));
      }

      artists = artists.filter(a => a.artistId !== artistId);
      fs.writeFileSync('./seeds/artists.json', JSON.stringify(artists, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Artist deleted successfully' }));
    }

    // GET all albums of specific artist
    if (req.method === 'GET' && req.url.match(/^\/artists\/\d+\/albums$/)) {
      const artistId = Number(req.url.split('/')[2]);
      const artistAlbums = albums.filter(album => album.artistId === artistId);

      if (artistAlbums.length === 0) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'This artist has no albums' }));
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(artistAlbums));
    }

    // GET album by ID with songs and artist
    if (req.method === 'GET' && req.url.startsWith('/albums/')) {
      const albumId = Number(req.url.split('/')[2]);
      const album = albums.find(a => a.albumId === albumId);

      if (!album) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Album not found' }));
      }

      album.artist = artists.find(ar => ar.artistId === album.artistId);
      album.songs = songs.filter(s => s.albumId === album.albumId);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(album));
    }

    // POST new album to artist
    if (req.method === 'POST' && req.url.match(/^\/artists\/\d+\/albums$/)) {
      const artistId = Number(req.url.split('/')[2]);

      if (!req.body?.name) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Album name is required' }));
      }

      const newAlbum = {
        albumId: getNewAlbumId(),
        artistId,
        name: req.body.name,
      };

      albums.push(newAlbum);
      fs.writeFileSync('./seeds/albums.json', JSON.stringify(albums, null, 2));
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(newAlbum));
    }

    // PUT/PATCH album
    if ((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/albums/')) {
      const albumId = Number(req.url.split('/')[2]);
      const album = albums.find(a => a.albumId === albumId);

      if (!album) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Album not found' }));
      }

      album.name = req.body?.name || album.name;
      fs.writeFileSync('./seeds/albums.json', JSON.stringify(albums, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(album));
    }

    // DELETE album
    if (req.method === 'DELETE' && req.url.startsWith('/albums/')) {
      const albumId = Number(req.url.split('/')[2]);
      const index = albums.findIndex(a => a.albumId === albumId);

      if (index === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Album not found' }));
      }

      albums.splice(index, 1);
      fs.writeFileSync('./seeds/albums.json', JSON.stringify(albums, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true }));
    }

    // GET songs of artist
    if (req.method === 'GET' && req.url.match(/^\/artists\/\d+\/songs$/)) {
      const artistId = Number(req.url.split('/')[2]);
      const artistAlbums = albums.filter(a => a.artistId === artistId).map(a => a.albumId);
      const result = songs.filter(s => artistAlbums.includes(s.albumId));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result));
    }

    // GET songs of album
    if (req.method === 'GET' && req.url.match(/^\/albums\/\d+\/songs$/)) {
      const albumId = Number(req.url.split('/')[2]);
      const result = songs.filter(song => song.albumId === albumId);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result));
    }

    // GET songs by track number
    if (req.method === 'GET' && req.url.match(/^\/tracknumbers\/\d+\/songs$/)) {
      const trackNumber = Number(req.url.split('/')[2]);
      const result = songs.filter(song => song.trackNumber === trackNumber);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(result));
    }

    // GET single song
    if (req.method === 'GET' && req.url.startsWith('/songs/')) {
      const songId = Number(req.url.split('/')[2]);
      const song = songs.find(s => s.songId === songId);
      if (!song) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Song not found' }));
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(song));
    }

    // POST song to album
    if (req.method === 'POST' && req.url.match(/^\/albums\/\d+\/songs$/)) {
      const albumId = Number(req.url.split('/')[2]);

      if (!req.body?.name || !req.body.lyrics) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Song name and lyrics are required' }));
      }

      const newSong = {
        songId: getNewSongId(),
        albumId,
        name: req.body.name,
        lyrics: req.body.lyrics,
        trackNumber: req.body.trackNumber || 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      songs.push(newSong);
      fs.writeFileSync('./seeds/songs.json', JSON.stringify(songs, null, 2));
      res.writeHead(201, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(newSong));
    }

    // PUT/PATCH song
    if ((req.method === 'PUT' || req.method === 'PATCH') && req.url.startsWith('/songs/')) {
      const songId = Number(req.url.split('/')[2]);
      const song = songs.find(s => s.songId === songId);

      if (!song) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Song not found' }));
      }

      song.name = req.body?.name || song.name;
      song.lyrics = req.body?.lyrics || song.lyrics;
      song.trackNumber = req.body?.trackNumber || song.trackNumber;
      song.updatedAt = new Date().toISOString();

      fs.writeFileSync('./seeds/songs.json', JSON.stringify(songs, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(song));
    }

    // DELETE song
    if (req.method === 'DELETE' && req.url.startsWith('/songs/')) {
      const songId = Number(req.url.split('/')[2]);
      const index = songs.findIndex(s => s.songId === songId);

      if (index === -1) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Song not found' }));
      }

      songs.splice(index, 1);
      fs.writeFileSync('./seeds/songs.json', JSON.stringify(songs, null, 2));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true }));
    }

    // Fallback - endpoint not found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Endpoint not found' }));
  });
});

const port = 5000;
server.listen(port, () => console.log('Server is listening on port', port));
