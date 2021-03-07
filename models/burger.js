//requiring orm file from config folder
var orm = require('../config/orm');

//defining burger model based on ORM functions pulled in above
const burger = {
    //select all burgers, using ORM
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //insert one burger to the table
    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function(res) {
            cb(res);
        });
    },
    //update existing burger
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", burgerId, function (res) {
          cb(res);
        });
      }
  

};

module.exports = burger;
