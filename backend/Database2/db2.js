const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

const MyDatabase = "./Database2/ventas.db";
const db2 = new sqlite3.Database(MyDatabase, (err) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = { db2 };
