const path = require("path");

const express = require("express");
//Controller
const productControllers = require("../controllers/products");

const router = express.Router();

router.get("/", productControllers.getProduct);

module.exports = router;
