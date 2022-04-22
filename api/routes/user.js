const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Users } = require("../models/User");

router.get("/", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.send(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.post("/newUser", (req, res) => {
  Users.create(req.body)
    .then((user) => {
      console.log("User create");
      res.status(201).send(user);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

module.exports = router;
