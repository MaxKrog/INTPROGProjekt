var mongoose = require("mongoose"), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var TracklistSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    createdBy: {type: String},
    genre: String,
    length: String,
	spotify: String,
	soundcloud: String,
	youtube: String,
    tracks: [{
        track: {type: ObjectId, ref: "Track"},
        startTime: {type: String},
        _id: false
    }]
}, {
    toObject: {
        virtuals: false
    },
    toJSON: {
        virtuals: false
    }
});
TracklistSchema.virtual("type").get(function(){ return "tracklist";});

module.exports = mongoose.model('Tracklist', TracklistSchema);
