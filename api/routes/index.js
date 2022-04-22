const express = require("express");
const router = express.Router();
const user = require("./user");
const favoritos = require("./favoritos");

router.use("/user", user);
router.use("/favoritos", favoritos);

module.exports = router;
