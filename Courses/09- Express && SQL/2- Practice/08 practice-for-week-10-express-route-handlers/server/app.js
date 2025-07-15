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
app.use(express.json());

// Your code here
// Get all artists 
app.get("/artists", (req, res) => {
  res.status(200).send(getAllArtists());
});

// Get a specific artist's detials based on artistId
app.get("/artists/:artistId", (req, res) => {
  let artistId = Number(req.params.artistId);
  let artistDetails = getArtistByArtistId(artistId);
  res.status(200).json(artistDetails);
});

// Edit a specifc artist by artistId
app.put("/artists/:artistsId", (req, res) => {
  let artistId = Number(req.params.artistsId);
  let data = req.body;

  let responsed_data = editArtistByArtistId(artistId, data);

  if (!responsed_data) {
    res.status(404).json({ error: "Artist Not Found" });
  }

  res.status(200).json(responsed_data);
});

// We can do the above in other two ways to make it available if the user use PATCH or PUT

// First one is chaining the two in one function 

function editArtistHandler(req, res) {
  const artistId = Number(req.params.artistId);
  const data = req.body;

  const updatedArtist = editArtistByArtistId(artistId, data);

  if (!updatedArtist) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(200).json(updatedArtist);
}

app.route("/artists/:artistsId")
  .put(editArtistHandler)
  .patch(editArtistHandler);


//  ✅ Option 2: Handle both methods inside a single route
app.all("/artists/:artistId", (req, res, next) => {
  if (req.method !== "PUT" && req.method !== "PATCH") return next();

  const artistId = Number(req.params.artistId);
  const data = req.body;

  const updatedArtist = editArtistByArtistId(artistId, data);

  if (!updatedArtist) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(200).json(updatedArtist);
});


// Delete a specified artist by artistId
app.delete("/artists/:artistId", (req, res) => {
  const artistId = Number(req.params.artistId);

  const deleted = deleteArtistByArtistId(artistId);

  if (!deleted) {
    return res.status(404).json({ error: "Artist not found" });
  }

  res.status(200).json({ message: "Successfully deleted" });
});

// Get all albums of a specific artist based on artistId
app.get("/artists/:artistId/albums", (req, res) => {
  const artistId = Number(req.params.artistId);

  const albums = getAlbumsByArtistId(artistId);

  res.status(200).json(albums);
})

// Get a specific album's details based on ablumId
app.get("/albums/:albumId", (req, res) => {
  const albumId = Number(req.params.albumId);

  const album = getAlbumByAlbumId(albumId);

  res.status(200).json(album);
})

// Add an album to a specific artist based on artistId
app.post("/artists/:artistId/albums", (req, res) => {
  const artistId = Number(req.params.artistId);

  const data = req.body;

  const album = addAlbumByArtistId(artistId, data);
  if (!album) {
    return res.status(404).json({ error: "Artist not found or invalid album data" });
  }

  res.status(201).json(album);
})

// Edit a specified album by albumId
app.all("/albums/:albumId", (req, res, next) => {
  if (req.method !== "PUT" && req.method !== "PATCH") return next();

  const albumId = Number(req.params.albumId);
  const data = req.body;

  editedalbum = editAlbumByAlbumId(albumId, data);
  if (!editedalbum) {
    return res.status(404).json({ error: "Album not found or invalid album id" });
  }
  res.status(200).json(editedalbum);
})


// Delete a specfied album by albumId
app.delete("/albums/:albumId", (req, res) => {
  const albumId = Number(req.params.albumId);

  const album = deleteAlbumByAlbumId(albumId);

  if (!album) {
    return res.status(404).json({ error: "Album not found or invalid album id" });
  }

  res.status(200).json({ message: "Successfully deleted" });
})

// Get all albums with names filtered by first letter
app.get("/albums", (req, res) => {
  const startsWith = req.query.startsWith;
  if (!startsWith) {
    return res.status(400).json({ error: "Missing 'startsWith' query parameter" });
  }

  const filteredAlbums = getFilteredAlbums(startsWith);

  res.status(200).json(filteredAlbums);
});

// ✅ 1. Get all songs of a specific artist by artistId
app.get("/artists/:artistId/songs", (req, res) => {
  const artistId = Number(req.params.artistId);
  const songs = getSongsByArtistId(artistId);
  res.status(200).json(songs);
});


// ✅ 2. Get all songs of a specific album by albumId
app.get("/albums/:albumId/songs", (req, res) => {
  const albumId = Number(req.params.albumId);
  const songs = getSongsByAlbumId(albumId);
  res.status(200).json(songs);
});


// ✅ 3. Get a specific song’s details by songId
app.get("/songs/:songId", (req, res) => {
  const songId = Number(req.params.songId);
  const song = getSongBySongId(songId);
  res.status(200).json(song);
});

// ✅ 4. Add a song to a specific album by albumId
app.post("/albums/:albumId/songs", (req, res) => {
  const albumId = Number(req.params.albumId);
  const data = req.body;

  const newSong = addSongByAlbumId(albumId, data);

  res.status(201).json(newSong);
});

// ✅ 5. Edit a specific song by songId(PUT or PATCH)
app.put("/songs/:songId", (req, res) => {
  const songId = Number(req.params.songId);
  const data = req.body;

  const updatedSong = editSongBySongId(songId, data);

  res.status(200).json(updatedSong);
});

// OR handle PATCH as well in the same route:
app.patch("/songs/:songId", (req, res) => {
  const songId = Number(req.params.songId);
  const data = req.body;

  const updatedSong = editSongBySongId(songId, data);

  res.status(200).json(updatedSong);
});

// ✅ 6. Delete a song by songId
app.delete("/songs/:songId", (req, res) => {
  const songId = Number(req.params.songId);

  deleteSongBySongId(songId);

  res.status(200).json({ message: "Successfully deleted" });
});


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}