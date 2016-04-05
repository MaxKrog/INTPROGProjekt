var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var React = require("react");
var ReactDOM = require("react-dom");

var TrackCollection = require("./collections/TrackCollection.js");
var TracklistCollection = require("./collections/TracklistCollection.js");


//CONTROLLERS
var indexController = require("./controllers/index.js");
var tracklistController = require("./controllers/Tracklist.js");
var tracksController = require("./controllers/Tracks.js");
module.exports = Backbone.Router.extend({

	routes: {
		"tracklists": "tracklists",
		"tracks": "tracks",
		"search/:query": "search",
		"track/:id": "track",
		"tracklist/:id": "tracklist"

	},
	initialize: function(){
        console.log("Router initialized!");
        this.element = document.getElementById("app");

        this.trackCollection = new TrackCollection();
        this.tracklistCollection = new TracklistCollection();

        //var newTrackModel = new TrackModel();
        //ReactDOM.render(<AddTrackView collection={this.trackCollection} model={newTrackModel} />, document.getElementById("body"));
        
    },

    tracklists: function () {
    	indexController({element: this.element });
    },

    tracklist: function(id) {
    	tracklistController({element: this.element, id: id});
    },

    tracks: function(){
    	tracksController({element: this.element});
    }
});