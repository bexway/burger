var orm = require("../config/orm.js");

//write model object here
var burgerModel = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
        callback(res);
        });
    },
    insertOne: function(callback) {
        orm.insertOne("burgers", ["burger_name", "devoured"], ["Name", false], function(res) {
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