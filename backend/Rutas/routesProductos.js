// Import express
const express = require("express");

const Productos = require("../Controlers/controlProductos");

const router = express.Router();

router.get("/all", Productos.listarProductos);

// Export router
module.exports = router;
