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
    updateOne: function(callback) {
        orm.updateOne("burgers", {"devoured": true}, "id=4", function(res) {
          callback(res);
        });
    },
  };

  module.exports = burgerModel;