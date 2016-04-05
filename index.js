var express = require("express");
var app = express();

app.use(express.static('client'));
//MONGOOSE
var mongoose = require("mongoose");
mongoose.set("debug", true);
var mongoURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/TracklistDB";
mongoose.connect(mongoURI);

//BODYPARSING. Exposes req.body, where you can get params sent etc.
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//LOGGING. Like "GET /api/tracks. Returned 200"
var logger = require("morgan");
app.use(logger("dev"));


//API Routes all the traffic to /api/ to the file ./api/Router.
var apiRouter = require("./api/Router");
app.use("/api", apiRouter);

//ERROR LOGGER If the request hasnt been answered yet, some error occured.
app.use(function(err, req, res, next) {
	console.log("This error hit the logger.");
	console.log(err);
	res.status(err.status || 500);
	res.send(err.responseJSON || err);
});

var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});
