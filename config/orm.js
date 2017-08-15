var connection = require("./connection.js");

function generateQmarks(num){
  var result = [];
  while(result.length<num){
    result.push("?");
  }
  return result.toString()
}

function objToSql(ob) {
  var arr = [];
  if(ob){
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

//write orm object here
var orm = {
    selectAll: function(tableInput, callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    insertOne: function(tableName, colNames, values, callback) {
        var queryString = "INSERT INTO "+tableName+" ("+colNames.join(",")+") VALUES (" + generateQmarks(values.length) + ");";
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      },
      updateOne: function(tableName, valueObj, condition, callback) {
        var queryString = "UPDATE "+tableName+" SET "+objToSql(valueObj)+" WHERE "+condition+";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      }
};

module.exports = orm;