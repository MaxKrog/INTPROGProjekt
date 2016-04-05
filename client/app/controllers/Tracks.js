var React = require("react");
var ReactDOM = require("react-dom");

var TrackCollection = require("../collections/TrackCollection.js");
var TracklistModel= require("../models/TracklistModel.js");

var AddTrackView = require("../views/AddTrackView.jsx");
var InfoListView = require("../views/info/InfoListView.jsx");

module.exports = function(options) {

	var trackCollection = new TrackCollection();

	trackCollection.fetch().done(function(){

		ReactDOM.render(
			<InfoListView collection={trackCollection} title="Latest Tracks" />
			, options.element);
	});

}