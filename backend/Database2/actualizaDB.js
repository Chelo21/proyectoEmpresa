const { db2 } = require("./db2.js");

db.get(
    "SELECT *  FROM productos ",
    [idProd],
    function (err, row) {
      if (err) {
        res.send("Error encountered while displaying");
        return console.error(err.message);
      }
      // console.log(lastIDProdA());
      console.log(row);
      return res.send(row);
    }
  );