var mysql = require("mysql");

var connection;

{
    connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'Codepass7', 
      database : 'burgers_db' 
    });
  }
  
  
  // Export the Connection
  module.exports = connection;