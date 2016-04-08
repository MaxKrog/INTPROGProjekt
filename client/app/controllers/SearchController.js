var React = require("react");
var ReactDOM = require("react-dom");

//MODEL

//COLLECTION
var TracklistCollection = require("../collections/TracklistCollection.js");

//VIEW
var ListView = require("../views/list/ListView.jsx");

module.exports = function(options) {

    var app = options.app;
    var element = options.element;

    return {
        all: function(filter) {

            var tracklistCollection = new TracklistCollection();

            // /api/tracklist?query=filter 
            var search_params = {
                query: filter
            };

            tracklistCollection.fetch({data: search_params}).done(function(){

                ReactDOM.render(
                    <ListView collection={tracklistCollection} title="Search results" editing={false}/>, element);
            });

        }
    };
};