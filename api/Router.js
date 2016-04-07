var mongoose = require("mongoose");
var router = require("express").Router();

var TrackModel = require("./TrackModel");
var TracklistModel = require("./TracklistModel");



router.use(function(req, res, next){
    req.userID = "55800dc0d4f0fbc2af5396ab";
    next();
})


// ---------------- TRACKS --------------- //
router.get("/track", function(req, res, next){
    TrackModel.find().exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.get("/track/:id", function(req, res, next){
    TrackModel.findById(req.params.id).exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.put("/track/:id", function(req, res, next){
    console.log(req.body);

    TrackModel.findByIdAndUpdate(req.params.id, req.body).exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.post("/track", function(req, res, next){
    
    console.log(req.body);
    
    var track = new TrackModel({
        title: req.body.title || null,
        artist: req.body.artist || null,
        genre: req.body.genre || null,
        links: {
            spotify: req.body.links ? req.body.links.spotify || null : null
        }
    });
    
    track.save(function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.delete("/track/:id", function(req, res, next){
    TrackModel.findByIdAndRemove(req.params.id, function(err, data){
        if(err) next(err);
        res.end();
    })
})


// ------------------- TRACKLISTS ----------------- //

//GET ALL TRACKLISTS WITHOUT TRACKS
router.get("/tracklist", function(req, res, next){ 
    TracklistModel.find().exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

//GET ONE TRACKLIST AND ALL TRACKS
router.get("/tracklist/:id", function(req, res, next){ 
    TracklistModel.findById(req.params.id).populate("tracks.track").exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

//UPDATE / EDIT ONE TRACKLIST
router.put("/tracklist/:id", function(req, res, next){
    TracklistModel.findByIdAndUpdate(req.params.id, req.body).exec(function(err, data){
        if(err) next(err);
        TracklistModel.findById(req.params.id).populate("tracks.track").exec( function(err, data){
            if(err) next(err);
            res.send(data);
        });
    });
});

//POST A NEW TRACKLIST
router.post("/tracklist", function(req, res, next){
    
    console.log(req.body);
    
    var tracklist = new TracklistModel({
        title: req.body.title || null,
        artist: req.body.artist || null,
        createdBy: req.body.createdBy || "mkrog hardcoded",
        tracks: req.body.tracks || []
    });
    
    tracklist.save(function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

//DELETE A TRACKLIST
router.delete("/tracklist/:id", function(req, res, next){
    
    TracklistModel.findByIdAndRemove(req.params.id, function(err, data){
        if(err) next(err);
        res.end();
    })
})

module.exports = router;
