var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TrackModel = require("../models/TrackModel.js");
//COLLECTION
var TrackCollection = require("../collections/TrackCollection.js");
//VIEW
var ListView = require("../views/list/ListView.jsx");
var InfoView = require("../views/info/InfoView.jsx");

var TrackView = require("../views/pages/TrackView.jsx");
module.exports = function(options) {

    var element = options.element;

    return {
        all: function() {

            var trackCollection = new TrackCollection();
            trackCollection.fetch();

            trackCollection.fetch().done(function(){

                ReactDOM.render(
                    <ListView collection={trackCollection} title="Latest Tracks" editing={false}/>, element);
            });
        },

        one: function(id) {

            var trackModel = new TrackModel({_id: id});

            trackModel.fetch().done(function() {

                ReactDOM.render(
                    <TrackView model={trackModel} editing={false} isNew={false} />
                    , element);
            });
        },

        add: function(){
            var trackModel = new TrackModel();

            ReactDOM.render(
                <TrackView model={trackModel} editing={true} isNew={true} />
                , element);

        }
    };
};