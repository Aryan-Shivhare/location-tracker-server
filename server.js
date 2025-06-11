const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Location = require("./models/Location");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// POST endpoint to receive location
app.post("/location", async (req, res) => {
  try {
    const { latitude, longitude, battery } = req.body;
    const loc = new Location({ latitude, longitude, battery });
    await loc.save();
    res.status(201).json({ message: "Location saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT || 3000);
});
