import express from "express";

const app = express();


// you can pass the parameter as an array
app.get(["./welcome","./hello"],(req,res) =>{
    // You need to take in your considration that you can use send to sned plain text
    res.send("Welcome to the app");
});

app.get("*" ,(req,res) =>{
    res.status(404).send("That page is not found, try a different path.");
});


const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`This server is listen in port ${PORT}`);
})
