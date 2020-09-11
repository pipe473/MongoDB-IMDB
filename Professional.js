const mongoose = require("mongoose");

const Professional = mongoose.Schema;

const ProfessionalSchema = new Professional({
    picture: String,
    name: String,
    age: Number,
    genre: String,
    weight: Number,
    height: Number,
    hairColor: String,
    eyeColor: String,
    race: String,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: String,
    profession: String
});

module.exports = mongoose.model("Professional", ProfessionalSchema, "profesionales" );