var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var TrackModel = require("../models/TrackModel.js");
module.exports = Backbone.Collection.extend({

	model: TrackModel,

	url: "api/track",

	initialize: function(){

		console.log("Created a TrackCollection!");

	},

	parse: function(data){
		console.log("Here i can parse the data:");
		console.log(data);

		return data;
	}
});