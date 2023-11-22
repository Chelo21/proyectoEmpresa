const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const { db, createTables } = require("./Database/db.js");

const { insertarProd } = require("./Insertar/insertarProd.js");
const { insertarClientes } = require("./Insertar/insertarClientes.js");
// Import routes
const routesProductos = require("./Rutas/routesProductos.js");

const app = express();
const PORT = 3333;

createTables();

// insertarProd();
insertarClientes();
// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.use("/productos", routesProductos);
// app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
