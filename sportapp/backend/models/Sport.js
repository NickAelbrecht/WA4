let mongoose = require("mongoose");

let SportSchema = new mongoose.Schema({
  naam: String
});

SportSchema.pre("remove", function(next) {
  this.model("Club").update(
    {},
    { $pull: { sporten: this._id } },
    { safe: true, multi: true },
    next
  );
});

mongoose.model("Sport", SportSchema);
