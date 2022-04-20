const express = require("express");
const { Users } = require("../models/User");
const router = express.Router();

router.post("/", (req, res) => {
  Users.create(req.body).then((user) => {
    console.log("User create");
    res.status(201).send(user);
  }).catch(()=>{
    res.sendStatus(400)
  })
});

module.exports = router;
