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

  for (var key in ob) {
    //double-checking that that property is in the object?
    if (Object.hasOwnProperty.call(ob, key)) {
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
      updateOne: function(tableName, newVals, condition, callback) {
        var queryString = "UPDATE "+tableName+" SET "+objToSql(newVals)+" WHERE "+condition+";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          console.log("test")
          console.log(callback)
          callback(result);
        });
      }
};

module.exports = orm;