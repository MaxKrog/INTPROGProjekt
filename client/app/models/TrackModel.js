var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");

//var TracklistCollection = require("../collections/TracklistCollection.js");

var TrackModel = Backbone.Model.extend({

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
		console.log("Inited a TrackModel!");

		if(!this.tracklists){
			var TracklistCollection = require("../collections/TracklistCollection.js");
			this.tracklists = new TracklistCollection();
		}

	},

	resetToBackup: function(){
		this.set(this._backupAttributes);
	},

	parse: function(data) {
		if(!this.tracklists){
			var TracklistCollection = require("../collections/TracklistCollection.js");
			this.tracklists = new TracklistCollection();
		}

		if(data.featuredIn){
			console.log("Fea");
			this.tracklists.reset(data.featuredIn);
			delete data.featuredIn;
		}
		console.log("PARSE");
		this._backupAttributes = _.clone(data);
		console.log(data);
		return data;
	},

	validate: function(attrs) {
		console.log("Validating");
		console.log(attrs);

	}
})

module.exports = TrackModel;