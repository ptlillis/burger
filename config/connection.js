const mysql = require('mysql');
var connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
    host: 'lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'wmfgwt0qm9h7toq2',
    password: 'mci3bt2evarulbqm',
    database: 'uyqp61j6t4fhsihi'
  });

};

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;