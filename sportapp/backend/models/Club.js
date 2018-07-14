var mongoose = require("mongoose");

var ClubSchema = new mongoose.Schema({
  naam: String,
  sporten: [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Sport'}],
  prijs: Number,
  locatie: String
});
mongoose.model("Club", ClubSchema);
