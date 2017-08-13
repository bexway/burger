var orm = require("../config/orm.js");

//write model object here
var burgerModel = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
        callback(res);
        });
    },
    insertOne: function(callback) {
        orm.insertOne("burgers", function(res) {
            callback(res);
        });
    },
    updateOne: function(callback) {
        orm.updateOne("burgers", function(res) {
          callback(res);
        });
    },
  };

  module.exports = burgerModel;