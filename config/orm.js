//requiring connection from the same folder
const connection = require('./connection');

//defining orm and query strings
const orm ={
    //selecting all burgers from the table
    selectAll: (table, cb) =>{

        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //adding new burger to the table
    insertOne: (table, column, value, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], (err, res) => {
            if(err) throw err;
            // console.log(res);
            cb(res);
        });
    },
    //update existing burger
    updateOne: (table, column, burgerId, cb) => {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
        connection.query(queryString, [table, column, burgerId], (err, res) => {
            console.log("update" + queryString);
            if (err) throw err;
            console.log(res);
            cb(res);
    });
    },
 
    
}

module.exports = orm;
