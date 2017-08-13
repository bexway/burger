var express = require("express");

var router = express.Router();

var burgerModel = require("../models/burger.js");

//create routes and render handlebars here
burgerModel.selectAll(function(data){
    console.log(data)
})

// burgerModel.insertOne(function(data){
//     console.log(data)
// })

burgerModel.updateOne(function(data){
    console.log(data)
})