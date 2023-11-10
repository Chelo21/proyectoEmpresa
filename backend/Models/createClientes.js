const { db } = require("../Database/db");

const createClientes = async () => {
  try {
    db.exec(
      "CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER, cpf INTEGER, email VARCHAR (50) )"
    );
    console.log("se creo tabla clientes");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createClientes };
