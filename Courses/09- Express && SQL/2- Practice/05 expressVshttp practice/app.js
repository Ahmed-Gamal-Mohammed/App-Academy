import express from "express";

const app = express();

// Parsing the request body
app.use(express.json);


// Server logic 

app.get('/users/:userID', (req,res) =>{
    // Parsing URL parameters
    const userId = req.params.userId;

    // Sending response 
    res.status(200).send(`User detials for userId: ${userId}`);
    // Proccess request


});

// Start Server 
const PORT = 8000;

app.listen(PORT, () =>{
    console.log("Server is listening on port", port);
})