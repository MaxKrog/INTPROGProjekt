var React = require("react");
var ReactDOM = require("react-dom");

//MODEL
var TrackModel = require("../models/TrackModel.js");
//COLLECTION
var TrackCollection = require("../collections/TrackCollection.js");
//VIEW
var HeaderView = require("../views/header/HeaderView.jsx");

var HeaderController = function(options) {

    var element = options.element;
    var user = options.model;

    ReactDOM.render(<HeaderView model={user} />, element);
};

module.exports = HeaderController;