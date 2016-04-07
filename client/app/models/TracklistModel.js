var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");

var TrackCollection = require("../collections/TrackCollection.js");
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
		console.log("Inited a tracklistmodel:");

		console.log(this);
	},

	parse: function(data){
		console.log("TracklistModel parse!");
		//Merges the objects in data.tracks.
		var tracks = data.tracks.map(function(item){
			var track = _.extend(item, item.track);
			delete track.track;
			return track;
		});
		delete data.tracks;

		if(this.get("tracks")) {
			this.get("tracks").reset(tracks);
		} else {
			var trackCollection = new TrackCollection(tracks);
			this.set("tracks", trackCollection);
		}
		

		return data;
	},
	toJSON: function(options) {

		var tracksAttrs = this.get("tracks").toJSON().map(function(track){
			return {
				startTime: track.startTime,
				track: track._id,

			}
		})

		var attrs = JSON.parse(JSON.stringify(this.attributes)); //Make a deep-copy
		attrs.tracks = tracksAttrs;

		console.log(attrs);
		return attrs;

	}
});