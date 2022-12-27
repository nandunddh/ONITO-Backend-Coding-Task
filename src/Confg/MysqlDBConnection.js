var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : 'root123',
    database : "onito"
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err);
      return;
    }
   
    console.log('DB connected ' );
  });
module.exports = connection;