var express = require("express");
var router = express.Router();

let mongoose = require("mongoose");
let Club = mongoose.model("Club");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("server works");
});

router.get("/API/clubs/", function(req, res, next) {
  Club.find(function(err, clubs) {
    if (err) {
      return next(err);
    }
    res.json(clubs);
  });
});

router.post("/API/clubs/", function(req, res, next) {
  let club = new Club(req.body);
  club.save(function(err, rec) {
    if (err) {
      return next(err);
    }
    res.json(rec);
  });
});

router.get("/API/club/:club", function(req, res, next) {
  res.json(req.club);
});

router.param('club', function(req, res, next, id) {
  let query = Club.findById(id);
  query.exec(function (err, club){
    if (err) { return next(err); }
    if (!club) { return next(new Error('not found ' + id)); }
    req.club = club;
    return next();
  });
}); 

router.delete('/API/club/:club', function(req, res, next) {
  req.club.remove(function(err) {
    if (err) { return next(err); }   
    res.json("removed club");
  });
})

module.exports = router;
