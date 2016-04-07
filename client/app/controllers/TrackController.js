var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TrackModel = require("../models/TrackModel.js");
//COLLECTION
var TrackCollection = require("../collections/TrackCollection.js");
//VIEW
var ListView = require("../views/list/ListView.jsx");
var InfoView = require("../views/info/InfoView.jsx");
module.exports = function(options) {

    var element = options.element;

    return {
        all: function() {

            var trackCollection = new TrackCollection();

            trackCollection.fetch().done(function(){

                ReactDOM.render(
                    <ListView collection={trackCollection} title="Latest Tracks" />, element);
            });

        },

        one: function(id) {

            var trackModel = new TrackModel({_id: id});

            trackModel.fetch().done(function() {

                var keys = ["title", "artist", "genre", "length", "spotify", "soundcloud", "youtube"];
                ReactDOM.render(
                    <InfoView model={trackModel} keys={keys} title="Track info" />
                    , element);
            });
        },

        add: function(){
            var trackModel = new TrackModel();

            var keys = ["title", "artist", "genre", "length", "spotify", "soundcloud", "youtube"];
            ReactDOM.render(
                <InfoView model={trackModel} keys={keys} title="Add Track" />
                , element);

        }
    };
};