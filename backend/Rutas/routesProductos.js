// Import express
const express = require("express");

const Productos = require("../Controlers/controlProductos");

const router = express.Router();

router.get("/", (request, response) => {
  response.json([
    {
      Ruta: "all",
    },

    { express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" },
  ]);
});

router.get("/all", Productos.listarProductos);
router.get("/uno", Productos.lastIDProd);
router.post("/new-product", Productos.newProduct);

// Export router
module.exports = router;

// CREATE TABLE productos (idProd	INTEGER NOT NULL UNIQUE, nombreProd TEXT, fechaIngProd TEXT, precioProd REAL DEFAULT 0,monedaProd TEXT DEFAULT '$', idProv INTEGER DEFAULT 0, activoProd INTEGER DEFAULT 1, stockProd REAL DEFAULT 0, minProd REAL DEFAULT 0, autoProd INTEGER PRIMARY KEY AUTOINCREMENT)
