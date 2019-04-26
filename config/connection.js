var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Codepass7",
    database: "burgers_db"
  });


connection.connect(function(err) {
  if (err) throw err;
 
});

//exports this file content so other files can access it
module.exports = connection;