const model = require("../model/reviews.js");
const express = require("express");
const app = express.Router();

app
  .get("/", (req, res, next) => {
    model
      .getAll()
      .then((x) => res.send(x))
      .catch(next);
  })
  .get("/:id", (req, res, next) => {
    const id = req.params.id;
    model
      .remove(+id)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/", (req, res, next) => {
    console.log("Request body:", req.body); // Debugging line for reviews
    model
      .add(req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .patch("/:id", (req, res, next) => {
    const id = req.params.id;
    console.log("Request body:", req.body); // Debugging line for reviews
    model
      .update(+id, req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .delete("/:id", (req, res, next) => {
    const id = req.params.id;
    model
      .remove(+id)
      .then((x) => res.send(x))
      .catch(next);
  })
  .post("/seed", (req, res, next) => {
    model
      .seed()
      .then((x) => res.send(x))
      .catch(next);
  });

module.exports = app;