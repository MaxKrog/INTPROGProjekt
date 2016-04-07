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

	},

	resetToBackup: function(){
		this.set(this._backupAttributes);
		this.tracks.reset(this._backupTracks);
	},

	parse: function(data){
		if(!this.tracks){
			this.tracks = new TrackCollection();
		}
		console.log("TracklistModel parse!");
		//Merges the objects in data.tracks.
		var tracks = data.tracks.map(function(item){
			var track = _.extend(item, item.track);
			delete track.track;
			return track;
		});
		delete data.tracks;

		//Backing up. If user cancels edit, this is the state it's retuned too.
		this._backupAttributes = _.clone(data);
		this._backupTracks = tracks;

		this.tracks.reset(tracks);
		return data;
	},
	toJSON: function(options) {

		var tracksAttrs = this.tracks.toJSON().map(function(track){
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