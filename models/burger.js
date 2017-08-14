var orm = require("../config/orm.js");

//write model object here
var burgerModel = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
        callback(res);
        });
    },
    insertOne: function(burgerName, callback) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, false], function(res) {
            callback(res);
        });
    },
    updateOne: function(valueObj, condition, callback) {
        orm.updateOne("burgers", valueObj, condition, function(res) {
          callback(res);
        });
    },
  };

  module.exports = burgerModel;