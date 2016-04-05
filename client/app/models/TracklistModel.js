var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: "_id",

	defaults: {
		title: null,
		artist: null,
		genre: null,
		spotify: null,
		soundcloud: null,
		youtube: null,
		type: "tracklist"
	},

	urlRoot: "api/tracklist",

	initialize: function(){
		console.log("I am a tracklistmodel:");
		console.log(this);
	}
})