const express = require("express");
const mongoose = require("mongoose");
const sanitize = require("mongo-sanitize");
const Artifact = require("./models/Artifact");

const app = express();
app.use(express.json());

const DB_CONNECTION_STRING =
  "mongodb+srv://student:bs7sBKTfjzwuHkPA%40123@cluster0.vvcdd9b.mongodb.net/?appName=Cluster0";

app.post("/artifacts/search", async (req, res) => {
  try {
    const query = sanitize(req.body);
    const results = await Artifact.find(query);
    res.json(results);
  } catch (err) {
    res.status(400).json({ error: "Invalid search query" });
  }
});

mongoose
  .connect(DB_CONNECTION_STRING)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
    app.listen(3005, () => {
      console.log("Museum server running on port 3005");
    });
  })
  .catch((err) => {
    console.log("Database connection failed! Error: " + err);
  });