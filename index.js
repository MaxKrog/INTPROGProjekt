var express = require("express");
var app = express();

app.use(express.static('client'));
//MONGOOSE
var mongoose = require("mongoose");

mongoose.set("debug", true);
var mongoURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/TracklistDB";
mongoose.connect(mongoURI);


//LOGGING
var logger = require("morgan");
app.use(logger("dev"));

//BODYPARSING
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//API
var apiRouter = require("./api/Router");
app.use("/api", apiRouter);

//ERROR LOGGER
app.use(function(err, req, res, next) {
	console.log("This error hit the logger.");
	console.log(err);
	res.status(err.status || 500);
	res.send(err.responseJSON || err);
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
