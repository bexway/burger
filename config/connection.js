var mysql = require("mysql");
var password = require("./password.js").password;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});