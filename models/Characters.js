const mongoose = require("mongoose");

const CharactersSchema = new mongoose.Schema({
  name: String,
  height: Number,
  mass: Number,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: Number,
  sex: String,
  gender: String,
  homeworld: String,
  species: String,
  films: String,
  vehicles: String,
  starships: String,
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Characters", CharactersSchema);
