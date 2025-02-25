// Setting up components

const express = require("express");
const server = express();

server.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2"]});
})

server.listen(4000, () => {
    console.log("Server running on port 4000");
})