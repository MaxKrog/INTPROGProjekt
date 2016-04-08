var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TracklistModel = require("../models/TracklistModel.js");
//COLLECTION
var TracklistCollection = require("../collections/TracklistCollection.js");

//VIEW
var ListView = require("../views/list/ListView.jsx");
var InfoView = require("../views/info/InfoView.jsx");

var TracklistView = require("../views/pages/TracklistView.jsx");

module.exports = function(options) {

    var app = options.app;
    var element = options.element;

    return {
        all: function() {

            var tracklistCollection = new TracklistCollection();

            tracklistCollection.fetch().done(function(){

                ReactDOM.render(
                    <ListView collection={tracklistCollection} title="Latest Tracklists" editing={false}/>, element);
            });

        },

        one: function(id) {

            var tracklistModel = new TracklistModel({_id: id});
           /* var tracklistModel = new TracklistModel({"title":"solomun BR"});
            var TrackCollection = require("../collections/TrackCollection.js");
            var trackCollection = new TrackCollection();
            trackCollection.fetch().done(function(){
                tracklistModel.set("tracks", trackCollection);
                tracklistModel.save();
            })
            */


            tracklistModel.fetch().done(function() {

                ReactDOM.render(
                    <TracklistView model={tracklistModel} editing={false} isNew={false} />
                    , element);
            });
        },

        add: function() {
            var tracklistModel = new TracklistModel();
            ReactDOM.render(
                <TracklistView model={tracklistModel} editing={true} isNew={true} />
                , element);
        }
    };
};