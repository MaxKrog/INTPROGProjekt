var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TrackModel = require("../models/TrackModel.js");
//COLLECTION
var TrackCollection = require("../collections/TrackCollection.js");
//VIEW

var AddView = require("../views/pages/AddView.jsx");
module.exports = function(options) {

    var element = options.element;

    return {
        all: function() {

            var trackCollection = new TrackCollection();
            trackCollection.fetch();

            trackCollection.fetch().done(function(){

                ReactDOM.render(
                    <AddView collection={trackCollection} title="Latest Tracks" editing={false}/>, element);
            });
        }
    };
};