const express = require("express");

const Movies = require("../movies/moviesModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Interesting Movie" });
});

server.get("/movies", (req, res) => {
  Hobbits.getAll()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
