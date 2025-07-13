const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/"){
      const htmlTemplate = fs.readFileSync("./views/new-player.html", "utf-8");
      const htmlPage = htmlTemplate
      .replace(/#{availableRooms}/g, world.availableRoomsToString())
      const resBody = htmlPage;
      res.statusCode = 200;
      res.setHeader("Content-Type","text/html")
      res.write(resBody);
      return res.end();
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      // the request will back with name and roomId 
      // i need to store the name in variable 
      const playerName = req.body.name;

      // then i need to search for the room by this id
      const stringRoom = world.rooms[req.body.roomId];
       
      // then create a new player with the initialezed player above that its constructor takes the name and room
      player = new Player(playerName, stringRoom);

      // then well redirect the clinet to the room with this id 
      // status code will be 302 
      res.writeHead(302,{Location: `/rooms/${startingRoom.id}`})
      res.end();
    }
   
    // Phase 3: GET /rooms/:roomId

    // Optional helper for redirects
    function redirect(res, location) {
      res.writeHead(302, { Location: location });
      res.end();
    }

    if (req.method === "GET" && req.url.startsWith("/rooms")) {
      // ✅ Redirect to home if player is not initialized
      if (!player) return redirect(res, "/");

      // ✅ Parse roomId from URL
      const urlParts = req.url.split("/");
      const roomId = Number(urlParts[2]);

      const room = world.rooms[roomId];

      // ✅ Redirect if player is trying to access a room they’re not in
      if (room !== player.currentRoom) {
        return redirect(res, `/rooms/${player.currentRoom.id}`);
      }

      // ✅ Read HTML template
      const htmlTemplate = fs.readFileSync("./game/views/room.html", "utf-8");

      // ✅ Replace variables in HTML
      const htmlPage = htmlTemplate
        .replace(/#{roomName}/g, room.name)
        .replace(/#{roomItems}/g, room.itemsToString())
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{exits}/g, room._getExits());

      // ✅ Send HTML response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(htmlPage);
    }

    // Phase 4: GET /rooms/:roomId/:direction
    if (req.method === "GET" && req.url.startsWith("/rooms") && req.url.split("/").length === 4) {
      const urlParts = req.url.split("/");
      const roomId = Number(urlParts[2]);
      const direction = urlParts[3].toLowerCase();
      if (!player) return redirect(res, "/");
      
      const room = world.rooms[roomId];

      if (room !== player.currentRoom) {
        return redirect(res, `/rooms/${player.currentRoom.id}`);
      }

      try {
         player.move(direction[0]);

        redirect(res,`/rooms/${player.currentRoom.id}`);
        
      } catch (error) {
            return redirect(res, `/rooms/${player.currentRoom.id}`);
      }

    }
    
    // Phase 5: POST /items/:itemId/:action

  if (req.method === "POST" && req.url.startsWith("/items") && req.url.split("/").length === 4) {
    const urlParts = req.url.split("/");
    const itemId = Number(urlParts[2]);
    const action = urlParts[3].toLowerCase();

    if (!player) return redirect(res, "/");

    try {
      switch (action) {
        case "eat":
          player.eatItem(itemId);
          break;
        case "drop":
          player.dropItem(itemId);
          break;
        case "take":
          player.takeItem(itemId);
          break;
        default:
          throw new Error("Invalid action");
      }

      return redirect(res, `/rooms/${player.currentRoom.id}`);

    } catch (error) {
      const errorTemplate = fs.readFileSync("./views/error.html", "utf-8");
      const errorPage = errorTemplate.replace("#{errorMessage}", error.message);
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end(errorPage);
    }
  }

    // Phase 6: Redirect if no matching route handlers
     if (!player){
      res.statusCode = 302;
      res.setHeader("Location",`/`)
      res.end()
      return 
    }

  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));