const express = require("express");

// Create the router instance 
const router = express.Router();

const weeklySchedule = [false, true, true, false, true, false, true];

router.get('/week', (req, res) => {
    // Send the fully weekly schedual
    res.json(weeklySchedule);
});

router.put("/week/:day", (req, res) => {
    // Update the schedule for specifed day to have a game
    const day = parseInt(req.params.day);

    weeklySchedule.splice(day, 1, true);

    res.json(weeklySchedule);
})