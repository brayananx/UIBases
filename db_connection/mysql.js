const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chatInformation'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

class MysqlConsultor {
    constructor() { }


  async fertilityRate(){
    return new Promise (function(resolve, reject){
      connection.query('SELECT * FROM fertitlity_rate_country_decade;', 
      function(error, results, fields){
        resolve(results);
      })
    });
   }
}

module.exports = MysqlConsultor;