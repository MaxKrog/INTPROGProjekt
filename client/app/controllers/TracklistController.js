var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TracklistModel = require("../models/TracklistModel.js");
//COLLECTION
var TracklistCollection = require("../collections/TracklistCollection.js");
//VIEW
var ListView = require("../views/list/ListView.jsx");
var InfoView = require("../views/info/InfoView.jsx");
module.exports = function(options) {

    var app = options.app;
    var element = options.element;

    return {
        all: function() {

            var tracklistCollection = new TracklistCollection();

            tracklistCollection.fetch().done(function(){

                ReactDOM.render(
                    <ListView collection={tracklistCollection} title="Latest Tracklists" />, element);
            });

        },

        one: function(id) {

            var tracklistModel = new TracklistModel({_id: id});

            tracklistModel.fetch().done(function() {

                var keys = ["title", "artist", "genre", "length", "spotify", "soundcloud", "youtube"];
                ReactDOM.render(
                	<div>
                   		<InfoView model={tracklistModel} keys={keys} title="Tracklist info" />
                   		<ListView collection={tracklistModel.get("tracks")} title="Tracks.."/>
                   	</div>
                    , element);
            });
        },

        add: function() {
        	
        }
    };
};