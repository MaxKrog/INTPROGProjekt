var React = require("react");
var ReactDOM = require("react-dom");

var TrackCollection = require("../collections/TrackCollection.js");
var TracklistModel= require("../models/TracklistModel.js");

var AddTrackView = require("../views/AddTrackView.jsx");
var InfoListView = require("../views/info/InfoListView.jsx");

module.exports = function(options) {

	var tracklistModel = new TracklistModel({_id: options.id});

	tracklistModel.fetch().done(function(){

		var trackCollection = new TrackCollection(tracklistModel.get("tracks"));

		var keys = ["title", "artist", "genre", "length", "spotify", "soundcloud", "youtube"];
		ReactDOM.render(
			<div>
				<AddTrackView model={tracklistModel} keys={keys}/>
				<InfoListView collection={trackCollection} title="Has Tracks" />
			</div>
			, options.element);
	});

}