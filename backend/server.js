const express = require("express");
const cors = require("cors");
const db = require("./Database/db");
const { createClientes } = require("./Models/createClientes");
const { createProductos } = require("./Models/createProductos");

const app = express();
const PORT = 3333;
// db();
createClientes();
createProductos();
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
