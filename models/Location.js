const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  tagId: String,
  latitude: String,
  longitude: String,
  speed: String,
  battery: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Location", locationSchema);
