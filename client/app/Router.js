var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var BackboneRouteControl = require("backbone-route-control");
var React = require("react");
var ReactDOM = require("react-dom");

module.exports = BackboneRouteControl.extend({

	routes: {
        "": "tracklist#all",
        "tracklist/:id": "tracklist#one",
        "tracks": "track#all",
        "track/:id" : "track#one",
        "add/track" : "track#add",
        "add/tracklist": "tracklist#add",
        "search/:filter": "search#all",
        "login": "authorization#login",
        "logout": "authorization#logout"

	},
	initialize: function(){
        console.log("Router initialized!");
    }
});