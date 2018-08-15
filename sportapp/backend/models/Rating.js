let mongoose = require("mongoose");

let RatingSchema = new mongoose.Schema({
  rating: Number,
  review: String
});

/*RatingSchema.pre("remove", function(next) {
  this.model("Club").update(
    {},
    { $pull: { ratings: this._id } },
    { safe: true, multi: true },
    next
  );
});*/

mongoose.model("Rating", RatingSchema);
