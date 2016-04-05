var $ = require("jquery");
var Backbone = require("backbone");
var Router = require("./Router.js");

$(document).ready(function(){
    var router = new Router();
    Backbone.history.start();
    
})