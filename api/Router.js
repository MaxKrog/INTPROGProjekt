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

//GET ONE TRACK AND FEATURED IN.
router.get("/track/:id", function(req, res, next){
    TrackModel.findById(req.params.id).exec( function(err, data){
        if(err) next(err);

        TracklistModel.find({"tracks.track": req.params.id}).select("-tracks").exec(function(err, data2){
            if(err) next(err);
            data = data.toJSON();
            //data2 = data2.toJSON();
            data["featuredIn"] = data2.map(function(item){
                return item.toJSON();
            });
            console.log(data);
            res.send(data);
        });
    });
});

router.put("/track/:id", function(req, res, next){
    console.log(req.body);

    TrackModel.findByIdAndUpdate(req.params.id, req.body).exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.post("/track", function(req, res, next){
    
    console.log(req.body);
    
    var track = new TrackModel(req.body);
    
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
    TracklistModel.find().select("-tracks").exec( function(err, data){
        if(err) next(err);
        res.send(data);
    })
})

router.get("/tracklist/filter/:filter", function(req, res, next){ 
    TracklistModel.find({$text: {$search: req.params.filter}}).select("-tracks").exec( function(err, data){
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
    console.log(req.body);
    TracklistModel.findByIdAndUpdate(req.params.id, req.body).exec( function(err, data){
        TracklistModel.findById(req.params.id).populate("tracks.track").exec( function(err, data){
            if(err) next(err);
            res.send(data);
        });
    });
});

//POST A NEW TRACKLIST
router.post("/tracklist", function(req, res, next){
    
    console.log(req.body);
    req.body.createdBy = "mkrog";
    
    var tracklist = new TracklistModel(req.body);
    
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
