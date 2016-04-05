var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var TracklistModel = require("../models/TracklistModel.js");

module.exports = Backbone.Collection.extend({

	model: TracklistModel,

	url: "api/tracklist",

	initialize: function(){

		console.log("Created a TracklistModelCollection!");

	},

	parse: function(data){
		console.log("Here i can parse the data:");
		console.log(data);

		return data;
	}
});