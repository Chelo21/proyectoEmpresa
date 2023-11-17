const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const { db, createTables } = require("./Database/db.js");
// import { createClientes } from "./Models/createClientes";
const { createProductos } = require("./Models/createProductos.js");
const { insertarProd } = require("./Insertar/insertarProd.js");
const { insertarClientes } = require("./Insertar/insertarClientes.js");

const app = express();
const PORT = 3333;
// openDb();
// createClientes();
// createProductos();

createTables();

// insertarProd();
insertarClientes();
// app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
