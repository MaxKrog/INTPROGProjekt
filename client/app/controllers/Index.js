var React = require("react");
var ReactDOM = require("react-dom");

var TracklistCollection = require("../collections/TracklistCollection");

var InfoListView = require("../views/info/InfoListView.jsx");

module.exports = function(options) {
	var tracklistCollection = new TracklistCollection();

	tracklistCollection.fetch().done(function(){
		ReactDOM.render(<InfoListView collection={tracklistCollection} title="Latest tracklists" />, options.element);
	});

}