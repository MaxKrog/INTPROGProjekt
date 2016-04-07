var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({

	idAttribute: "_id",

	defaults: {
		title: null,
		artist: null,
		genre: null,
		length: null,
		spotify: null,
		soundcloud: null,
		youtube: null,
		type: "track"
	},

	urlRoot: "api/track",

	initialize: function(){

	},

	validate: function(attrs) {
		console.log("Validating");
		console.log(attrs);

	}
})