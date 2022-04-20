const express = require("express");
const router = express.Router();

const {Users} = require("../models/User");
const { ListFilm } = require("../models/ListFilm");

const newUser = require("./newUser");
const logIn = require("./logIn");
const logout = require("./logout");

router.use("/newUser", newUser);
router.use("/login", logIn);
router.use("/logout", logout);




router.get("/user", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.send(err));
});

/* include: [
      {
        model: ListFilm,
        as: "autor",
      },

    ], */

module.exports = router;
