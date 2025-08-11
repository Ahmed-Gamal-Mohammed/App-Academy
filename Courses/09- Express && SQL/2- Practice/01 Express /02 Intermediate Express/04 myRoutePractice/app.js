const express = require("express");

const app = express();

// Allow JSON body parsing for PUT requests
app.use(express.json());

// Import Routes 
const homeRouter = require('./routes/home');
const scheduleRouter = require('./routes/schedule');
const rosterRouter = require('./routes/roster');


// Mount them
app.use('/home', homeRouter);
app.use('/schedual', scheduleRouter);
app.use('/roster', rosterRouter);

app.listen(5000, () => console.log('Server running on port 5000'));
