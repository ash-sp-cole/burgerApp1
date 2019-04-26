var mysql = require("mysql");

var connection;

if(process.env.ASHSP_URL){
    connection = mysql.createConnection(process.env.ASHSP_URL);
  }
  else{
    connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'Codepass7', 
      database : 'burgers_db' 
    });
  }
  
  
  // Export the Connection
  module.exports = connection;