import express from "express"

const app = express();

const users = {};
let nextId = 1;
const samplenames = ["Sara","Jesse","Jordan","Kelly","Ross"];

app.get("/users",(req, res) =>{
    res.send(users);
});

app.post("/users",(req,res) =>{
    const newUser = samplenames[Math.floor(Math.random() * samplenames.length)];

    users[nextId] = {
        id :nextId,
        name: newUser
    };

    nextId++;
    res.send({
        status: "success",
        message: `New user ${newUser} added with ID ${nextId - 1}`
    });
});

app.delete("/users/:id", (req,res) =>{
    const deleteUser = users[req.params.id];

    if (deleteUser) {
        delete users[req.params.id];

        res.send({
            status: 'success',
            message: `Deleted user ${deleteUser.id}, name ${deleteUser.name}`
        });
    }else{
        res.status(404).send({
            status: "Failure",
            message: `ID ${req.params.id} not found`
        });
    }
});