var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var TrackModel = require("../models/TrackModel.js");
module.exports = Backbone.Collection.extend({

	model: TrackModel,

	url: "api/track",

	initialize: function(){

		console.log("Created a TrackCollection!");

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