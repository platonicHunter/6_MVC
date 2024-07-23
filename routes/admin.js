const path = require("path");
//Controller
const productControllers = require("../controllers/products");

const express = require("express");
const { title } = require("process");
const router = express.Router();

//admin/add-product==>GET
router.get("/add-product", productControllers.getAddProduct);

//admin/add-product==>POST
router.post("/add-product", productControllers.postAddProduct);

module.exports =router;
