// Setting up components

const express = require("express");
const server = express();

server.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2"]});
})