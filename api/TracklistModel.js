var mongoose = require("mongoose"), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var TracklistSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    createdBy: {type: String},
    links: {
    	spotify: String,
    	soundcloud: String,
    	youtube: String
    },
    tracks: [{
    	track: {type: ObjectId, ref: "Track"},
    	startTime: {type: String},
    	_id: false
    }]
});

module.exports = mongoose.model('Tracklist', TracklistSchema);
