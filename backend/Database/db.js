const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

const MyDatabase = "./Database/empresa.db";
const db = new sqlite3.Database(MyDatabase, (err) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

const createTables = () => {
  console.log("creando tablas ===");

  db.run(
    "CREATE TABLE IF NOT EXISTS articulos (idProd INTEGER, nombre TEXT , marca TEXT, precio REAL,cantidad	NUMERIC DEFAULT 0, activo	INTEGER DEFAULT 1, grupo TEXT, linkImg TEXT, linkPag TEXT, idAuto	INTEGER PRIMARY KEY AUTOINCREMENT)"
  );

  db.run(
    "CREATE TABLE IF NOT EXISTS productos (idProd	INTEGER NOT NULL UNIQUE, nombreProd TEXT, fechaIngProd TEXT, precioProd REAL DEFAULT 0,monedaProd TEXT DEFAULT '$', idProv INTEGER DEFAULT 0, activoProd INTEGER DEFAULT 1, stockProd REAL DEFAULT 0, minProd REAL DEFAULT 0, autoProd INTEGER PRIMARY KEY AUTOINCREMENT)"
  );
  // db.run("DELETE FROM productos");
  //===

  db.run(
    "CREATE TABLE IF NOT EXISTS clientes (idCli	INTEGER PRIMARY KEY AUTOINCREMENT, nombreCli	TEXT, direCli TEXT, telCli	TEXT, celCli	TEXT, fecNacCli	TEXT, ciudadCli	TEXT, depCli	TEXT, fechaIngCli	TEXT, cedIDCli	TEXT, activoCli	INTEGER DEFAULT 1, fechaModCli	TEXT, Timestamp	DATETIME DEFAULT CURRENT_TIMESTAMP)"
  );
  // db.run(
  //   "CREATE TABLE IF NOT EXISTS clientes (idCli	INTEGER PRIMARY KEY AUTOINCREMENT, nombreCli	TEXT, direccionCli	REAL, telCli	TEXT, celCli	TEXT, fecNacCli	TEXT, ciudadCli	TEXT, depCli	TEXT, fechaIngCli	TEXT, cedIDCli	TEXT, activoCli	INTEGER DEFAULT 1, fechaModCli	TEXT, Timestamp	DATETIME DEFAULT CURRENT_TIMESTAMP)"
  // );

  // db.run(
  //   "CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER, cpf INTEGER, email VARCHAR (50) )"
  //   );
};

// export default { db, createTables };
module.exports = { db, createTables };

// you would have to import / invoke this in another file

// async function openDb() {
//   console.log("se creo database....");
//   return open({
//     filename: "./Database/empresa.db",
//     driver: sqlite3.Database,
//   });
// }

// module.exports = openDb;
// // import sqlite3 from "sqlite3";
// // import { open } from "sqlite";

// var sqlite3 = require("sqlite3").verbose();
// var { open } = require("sqlite");

// // you would have to import / invoke this in another file
// var openDb = async () => {
//   return open({
//     filename: "./Database/empresa.db",
//     driver: sqlite3.Database,
//   });
// };
// module.exports = openDb;
// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database("./Database/empresa.db", (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Connected to SQlite database.");
// });

// module.exports = { db };

// // open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the in-memory SQlite database.');
//   });

//   // close the database connection
//   db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });
