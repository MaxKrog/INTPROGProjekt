var $ = require("jquery");
var Backbone = require("backbone");
var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("./Router.js");

var userModel = require("./models/UserModel.js");

$(document).ready(function(){

	var header = document.getElementById("header");
	var element = document.getElementById("app");
	var controllers = {
		track: require("./controllers/TrackController.js")({element: element}),
		tracklist: require("./controllers/TracklistController.js")({element: element}),
		search: require("./controllers/SearchController.js")({element: element}),
		authorization: require("./controllers/AuthorizationController.js")({element: element}),
		header: require("./controllers/HeaderController.js")({element: header, model: userModel })
	}
    var router = new Router({controllers: controllers});

    Backbone.history.start();
    
})

window.userModel = userModel;