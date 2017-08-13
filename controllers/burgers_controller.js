var express = require("express");

var router = express.Router();

var burgerModel = require("../models/burger.js");

//create routes and render handlebars here
// burgerModel.selectAll(function(data){
//     console.log(data)
// });

// // burgerModel.insertOne(function(data){
// //     console.log(data)
// // });

// burgerModel.updateOne(function(data){
//     console.log(data)
// });

router.get("/", function(req, res) {
    burgerModel.selectAll(function(data) {
        console.log(data);
        res.render("index", {burger:data});
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgerModel.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.post("/", function(req, res) {
    burgerModel.insertOne([
      "name"
    ], [
      req.body.name
    ], function() {
      res.redirect("/");
    });
});
  

module.exports = router;