var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var BackboneRouteControl = require("backbone-route-control");
var React = require("react");
var ReactDOM = require("react-dom");

module.exports = BackboneRouteControl.extend({

	routes: {
        "tracks": "track#all",
        "track/:id": "track#one",
        "tracklists": "tracklist#all",
        "tracklist/:id": "tracklist#one"

	},
	initialize: function(){
        console.log("Router initialized!");
        console.log(this.controllers);  
    },
});