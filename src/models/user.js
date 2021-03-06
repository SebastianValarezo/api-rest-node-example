const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "car",
    },
  ],
});

module.exports = mongoose.model("user", userScheme);
