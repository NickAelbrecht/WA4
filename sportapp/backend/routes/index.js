var express = require("express");
var router = express.Router();

let mongoose = require("mongoose");
let Club = mongoose.model("Club");
let Sport = mongoose.model("Sport");
let Rating =mongoose.model("Rating");

let jwt = require("express-jwt");

let auth = jwt({ secret: process.env.RECIPE_BACKEND_SECRET });

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("server works");
});

router.get("/API/clubs/", auth,function(req, res, next) {
  let query = Club.find().populate("sporten").populate("ratings");
  query.exec(function(err, clubs) {
    if (err) {
      return next(err);
    }
    res.json(clubs);
  });
});

router.post("/API/clubs/",auth, function(req, res, next) {
  //auth,
  Sport.create(req.body.sporten, function(err, sp) {
    if (err) {
      return next(err);
    }
    let club = new Club({
      naam: req.body.naam,
      prijs: req.body.prijs,
      locatie: req.body.locatie
    });
    club.sporten = sp;
    club.save(function(err, rec) {
      if (err) {
        console.log("error!!!");
        Sport.remove({ _id: { $in: club.sporten } });
        return next(err);
      }
      res.json(club);
    });
  });
});

router.post("/API/club/:club/sporten",auth, function(req, res, next) {
  let sp = new Sport(req.body);

  sp.save(function(err, sport) {
    if (err) return next(err);

    req.club.sporten.push(sport);
    req.club.save(function(err, rec) {
      if (err) return next(err);
      res.json(sport);
    });
  });
});

router.post("/API/club/:club/ratings", function(req, res, next) {
  
   let rating = new Rating(req.body);

  rating.save(function(err, rate) {
    if (err) return next(err);

    req.club.ratings.push(rate);
    req.club.save(function(err) {
      if (err) return next(err);

      res.json(req.club);//req.club);
    });
  });
});

router.get("/API/club/:club",auth, function(req, res, next) {
  res.json(req.club);
});

router.param("club", function(req, res, next, id) {
  let query = Club.findById(id).populate("sporten").populate("ratings");
  query.exec(function(err, club) {
    if (err) {
      return next(err);
    }
    if (!club) {
      return next(new Error("not found " + id));
    }
    req.club = club;
    return next();
  });
});

router.delete("/API/club/:club",auth, function(req, res, next) {
  //auth,
  Sport.remove({ _id: { $in: req.club.sporten } }, function(err) {
    if (err) return next(err);
    req.club.remove(function(err) {
      if (err) {
        return next(err);
      }
      res.json(req.club);
    });
  });
});

module.exports = router;
