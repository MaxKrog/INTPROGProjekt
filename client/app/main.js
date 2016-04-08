var $ = require("jquery");
var Backbone = require("backbone");
var Router = require("./Router.js");

$(document).ready(function(){

	var element = document.getElementById("app");
	var controllers = {
		track: require("./controllers/TrackController.js")({element: element}),
		tracklist: require("./controllers/TracklistController.js")({element: element}),
		add: require("./controllers/AddController.js")({element: element})
	}
    var router = new Router({controllers: controllers});

    Backbone.history.start();
    
})