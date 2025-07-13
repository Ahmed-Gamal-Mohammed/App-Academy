// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});


app.get('/artists',(req,res) =>{
  const artists = getAllArtists();
  res.status(200).send(artists);
});

app.post("/artists",(req,res) =>{
  const artistData = req.body;
  const newArtist = addArtist(artistData);

  res.status(201).send(newArtist);
});

app.get("/artists/latest",(req,res) =>{
  const latestArtist = getLatestArtist();
  res.status(200).send(latestArtist);
})

app.get("/artists/latest/albums",(req,res) =>{
  const album = getAlbumsForLatestArtist();

  res.status(200).send(album);
})
// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}