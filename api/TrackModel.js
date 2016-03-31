var mongoose = require("mongoose"), Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var TrackSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    genre: {type: String},
    links: {
    	spotify: String,
    	soundcloud: String,
    	youtube: String
    }
});

module.exports = mongoose.model('Track', TrackSchema);
