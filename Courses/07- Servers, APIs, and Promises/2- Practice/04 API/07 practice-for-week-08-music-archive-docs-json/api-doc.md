Get a specific artist's details based on artistId
Request components:

Method: GET
URL: /artists/:artistId
Headers: none
Body: none
Response components:

Status code: 200
Headers: Content-Type: application/json
Body: `{
  "name": "Red Hot Chili Peppers",
  "artistId": 1,
  "albums": [
    {
      "name": "Stadium Arcadium",
      "albumId": 1,
      "artistId": 1
    }
  ]
}`

Add an artist
Request components: 

Method: POST
URL: /artists
Headers: application/json
Body: { name: "anyname"}
Response components:

Status code: 201 Created 
Headers: application/json
Body:none





Edit a specified artist by artistId
Request components:

Method: PATCH/PUT
URL: /artist/:artistId
Headers: application/json
Body: { name: "newname"}
Response components:

Status code: 200
Headers: application/json
Body: none


Delete a specified artist by artistId
Request components:

Method: Delete
URL:  /artist/:artistId
Headers: none
Body: none
Response components:

Status code: 200 OK
Headers: application/json
Body: none



Get all albums of a specific artist based on artistId
Request components:

Method: GET
URL: /artists/:artistId/albums
Headers: none
Body: none
Response components:

Status code: 200 OK
Headers: application/json
Body: [
  {
    "name": "Stadium Arcadium",
    "albumId": 1,
    "artistId": 1
  }
]


Get a specific album's details based on albumId
Request components:

Method: GET
URL: albums/:albumId
Headers: none
Body: none
Response components:

Status code: 200 Ok 
Headers: application/json
Body:    {
  "name": "Stadium Arcadium",
  "albumId": 1,
  "artistId": 1,
  "artist": {
    "name": "Red Hot Chili Peppers",
    "artistId": 1
  },
  "songs": [
    {
      "name": "Dani California",
      "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
      "trackNumber": 1,
      "songId": 1,
      "createdAt": "2024-02-24T10:20:47.000Z",
      "updatedAt": "2024-02-24T10:20:47.000Z",
      "albumId": 1
    }
  ]
}




Add an album to a specific artist based on artistId
Request components:

Method: POST
URL: /artists/:artistId/albums
Headers: application/json
Body: {
    name: "album-name"
}
Response components:

Status code: 201 created
Headers: application/json
Body: none


Edit a specified album by albumId
Request components:

Method: PATCH/PUT
URL: /albums/:albumId 
Headers: application/json
Body: {
    name: "modified-name"
}
Response components:

Status code: 200 ok
Headers: application/json
Body: none

Delete a specified album by albumId
Request components:

Method: DELETE
URL: /albums/:albumId 
Headers: none
Body: none
Response components: 

Status code: 200 ok
Headers: application/json
Body: none

Get all songs of a specific artist based on artistId
Request components:

Method: GET
URL: /artists/:artistId/songs
Headers: none
Body: none
Response components:

Status code: 200 ok
Headers: application/json
Body: // 20240224150834
// http://localhost:5000/artists/1/songs

[
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1
  }
]


Get all songs of a specific album based on albumId
Request components:

Method: GET
URL: albums/:albumId/songs
Headers: none
Body: none
Response components:

Status code: 200 ok
Headers:  application/json
Body:



// 20240224150953
// http://localhost:5000/albums/1/songs

[
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1
  }
]






Get all songs of a specified trackNumber
Note: This one is meant to be a little more challenging, but should still follow a similar pattern to those above.

Can you see a pattern between this endpoint and the two previous endpoints?

Hint: Think of how you solved getting all songs by a specific artist and by a specific album. What is resource that you wanted to get back for those endpoints? What information was that resource constrained by for each of those endpoints? Now think about getting all songs by a specific trackNumber. What is the resource you want to get? What information is the resource constrained by for this endpoint?

Request components:

Method: GET
URL: tracknumbers/1/songs
Headers: none
Body: none
Response components:

Status code: 200 ok
Headers: application/json
Body: true 




Get a specific song's details based on songId
Request components:

Method:
URL: /songs/:songId
Headers: none
Body: none
Response components:

Status code: 200 ok
Headers: application/json
Body: true






Add a song to a specific album based on albumId
Request components:

Method: POST
URL: /albums/1/songs
Headers: application/json
Body: {name: "songName, lyrics: " songs, lyrics trackNumber: "optional i guess}
Response components:

Status code: 201 created
Headers: application/json
Body: none


Edit a specified song by songId
Request components:

Method: PATCH/PUT
URL: /songs/:songId
Headers: application/json " 
Body:  {name: "ModigiedsongName, lyrics: "modified songs, lyrics trackNumber: "modifeid and optional i guess}
Response components:

Status code: 200 ok
Headers: application/json
Body:none


Delete a specified song by songId
Request components:
 
Method: DELTE
URL: /songs/:songId
Headers: nonr
Body: none
Response components:

Status code: 200 ok
Headers: none
Body: none