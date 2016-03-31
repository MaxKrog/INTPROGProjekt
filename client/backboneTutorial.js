var TrackModel = Backbone.Model.extend({

	idAttribute: "_id",

	defaults: {
		title: null,
		artist: null,
		genre: null,
		links: {
			spotify: null,
			soundcloud: null,
			youtube: null
		}
	},

	urlRoot: "http://localhost:3000/api/track",

	initialize: function(){
		console.log("I am a trackmodel:");
		console.log(this);
	}
})

var TrackModelCollection = Backbone.Collection.extend({

	model: TrackModel,

	url: "http://localhost:3000/api/track",

	initialize: function(){

		console.log("Created a TrackModelCollection!");

	},

	parse: function(data){
		console.log("Here i can parse the data:");
		console.log(data);

		return data;
	}
});

var TracklistModel = Backbone.Model.extend({

	idAttribute: "_id",

	defaults: {
		title: null,
		artist: null,
		genre: null,
		links: {
			spotify: null,
			soundcloud: null,
			youtube: null
		}
	},

	urlRoot: "http://localhost:3000/api/tracklist",

	initialize: function(){
		console.log("I am a tracklistmodel:");
		console.log(this);
	}
})

var TracklistModelCollection = Backbone.Collection.extend({

	model: TracklistModel,

	url: "http://localhost:3000/api/tracklist",

	initialize: function(){

		console.log("Created a TracklistModelCollection!");

	},

	parse: function(data){
		console.log("Here i can parse the data:");
		console.log(data);

		return data;
	}
});

var tlmCollection = new TracklistModelCollection();

tlmCollection.fetch();