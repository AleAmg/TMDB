const express = require("express");
const router = express.Router();
const { Favoritos } = require("./../models");

router.get("/", (req, res) => {
  Favoritos.findAll({ where: { userId: req.body.userId } })
    .then((favoritos) => {
      res.send(favoritos);
    })
    .catch((err) => res.send(err));
});

router.post("/add", (req, res) => {
  Favoritos.create(req.body)
    .then((favorito) => res.status(201).send(favorito))
    .catch((err) => res.send(err));
});

module.exports = router;
