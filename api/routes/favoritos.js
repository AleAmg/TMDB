const express = require("express");
const router = express.Router();
const { Favoritos } = require("./../models");

router.post("/", (req, res) => {
  Favoritos.findAll({ where: { userId: req.body.userId } })
    .then((favoritos) => {
      res.status(200).send(favoritos);
    })
    .catch((err) => res.send(err));
});

router.post("/add", (req, res) => {
  Favoritos.create(req.body)
    .then((favorito) => res.status(201).send(favorito))
    .catch((err) => res.send(err));
});

router.delete("/delete/:movieId/:userId", (req, res) => {
  const { userId, movieId } = req.params;
  console.log(req.params);
  Favoritos.destroy({ where: { userId: userId, movieId: movieId } })
    .then(() => res.sendStatus(202))
    .catch((err) => res.send(err));
});

module.exports = router;
 