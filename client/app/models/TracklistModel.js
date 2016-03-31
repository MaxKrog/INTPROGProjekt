var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: "_id",

	defaults: {
		title: null,
		artist: null,
		genre: null,
		links: {
			spotify: null,
			soundcloud: null,
			youtube: null
		}
	},

	urlRoot: "api/tracklist",

	initialize: function(){
		console.log("I am a tracklistmodel:");
		console.log(this);
	}
})