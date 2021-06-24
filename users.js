const { request } = require("express");
const express = require("express");

const users = express.Router();

users.get("/", (req, res) => {
  res.send("here from users home");
});

users.get("/:id", (req, res) => {
  res.send({
    id: req.params.id,
    name: "khaled",
  });
});

module.exports = users;
