const model = require("../model/users");
const express = require("express");
const app = express.Router();

app
  .get("/", async (req, res, next) => {
    res.send(await model.getAll());
  })
  .get("/search", (req, res, next) => {
    const query = typeof req.query.q === "string" ? req.query.q : "";
    model
      .searchUsers(query)
      .then((x) => res.send(x))
      .catch(next);
  })
  .get("/:id", (req, res, next) => {
    const id = req.params.id;
    model
      .get(+id)
      .then((x) => res.send(x))
      .catch(next);
  })

  .post("/", (req, res, next) => {
    console.log(req.body);
    model
      .add(req.body)
      .then((x) => res.send(x))
      .catch(next);
  })
  .patch("/:id", (req, res, next) => {
    const id = req.params.id;
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
