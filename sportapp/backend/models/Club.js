var mongoose = require("mongoose");

var ClubSchema = new mongoose.Schema({
  naam: String,
  sporten: [String],
  prijs: Number,
  locatie: String
});
mongoose.model("Club", ClubSchema);
