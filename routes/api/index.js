const express = require("express");
const router = express.Router()
const bookroutes = require("./bookroutes")

router.use("/books", bookroutes)

module.exports = router;