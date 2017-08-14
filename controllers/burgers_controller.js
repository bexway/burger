var express = require("express");

var router = express.Router();

var burgerModel = require("../models/burger.js");

router.get("/", function(req, res) {
    burgerModel.selectAll(function(data) {
        res.render("index", {burger:data});
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burgerModel.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.post("/", function(req, res) {
    burgerModel.insertOne(req.body.burger_name, function() {
      res.redirect("/");
    });
});
  

module.exports = router;