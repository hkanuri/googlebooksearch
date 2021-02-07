const express = require("express");
const router = express.Router()
const bookRoutes = require("./bookroutes")

router.use("/books", bookRoutes)

module.exports = router;