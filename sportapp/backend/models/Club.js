var mongoose = require("mongoose");

var ClubSchema = new mongoose.Schema({
  naam: String,
  sporten: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sport"
    }
  ],
  prijs: { type: Number, default: 0 },
  locatie: { type: String, default: "Geen locatie opgegeven" }
});
mongoose.model("Club", ClubSchema);
