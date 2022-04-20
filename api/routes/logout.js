const express = require("express");
const router = express.Router();

router.post("/",(req, res)=>{
    req.logOut()
    res.sendStatus(200)
});

module.exports = router;