var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var TrackModel = require("../models/TrackModel.js");

var TrackCollection = Backbone.Collection.extend({

	model: TrackModel,

	idAttribute: "_id",

	url: "api/track",

	initialize: function(){

	},

	parse: function(data){
		console.log("Here i can parse the data:");
		console.log(data);

		return data;
	},

	swapPlaces : function(index1, index2) {
        this.models[index1] = this.models.splice(index2, 1, this.models[index1])[0];
    }
});

module.exports = TrackCollection;