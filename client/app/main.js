var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var React = require("react");
var ReactDOM = require("react-dom");
var Najs = require("./views/Login.jsx");

var TrackCollection = require("./collections/TrackCollection.js");

//VIEWS: importing
var AddTrackView = require("./views/AddTrackView.jsx");

var Router = Backbone.Router.extend({
    
    initialize: function(){
        console.log("Router initialized!");
        
        this.trackCollection = new TrackCollection();
        this.trackCollection.fetch();
    }
})

$(document).ready(function(){
    var router = new Router();
    
    ReactDOM.render(<AddTrackView />, document.getElementById("body"));
})