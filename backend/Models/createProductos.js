const { db } = require("../Database/db");

const createProductos = async () => {
  try {
    db.exec(
      "CREATE TABLE IF NOT EXISTS productos (idProd	INTEGER NOT NULL UNIQUE, nombreProd TEXT, fechaIngProd TEXT, precioProd REAL DEFAULT 0,monedaProd TEXT DEFAULT '$', idProv INTEGER DEFAULT 0, activoProd INTEGER DEFAULT 1, stockProd REAL DEFAULT 0, minProd REAL DEFAULT 0, autoProd INTEGER PRIMARY KEY AUTOINCREMENT)"
    );
    console.log("se creo tabla productos");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProductos };
