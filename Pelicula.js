const mongoose = require("mongoose");

const Movie = mongoose.Schema;

const MovieSchema = new Movie({
  picture: String,
  title: String,
  releaseYear: Date,
  nationality: String,
  genre: String,
  actores: Array,
  director: String,
  writer: String,
  language: String,
  platform: String,
  isMCU: Boolean,
  mainCharacterName: String,
  producer: String,
  distributor: String,
  genre: String,
});

module.exports = mongoose.model("Movie", MovieSchema, "movies");
