const express = require("express");
const bodyParser = require("body-parser");

// let Peli = require("./Pelicula");
const Professional = require("./professionalsFunctions");
let mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/imdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEST PARA CREAR PELICULA

// let movieDocument = new Peli({
//   picture: "first",
//   title: "none",
//   releaseYear: 1,
//   nationality: "spain",
//   genre: "action",
//   actores: ["Pepe", "Jose"],
//   director: "Juan",
//   writer: "Joan",
//   language: "spanish",
//   platform: "Netflix",
//   isMCU: true,
//   mainCharacterName: "Jose",
//   producer: "Peter",
//   distribuitor: "Daniel",
//   genre: "man",
// });

// movieResp = (err, res) => {
//   if (err) {
//     console.log("Error: " + err);
//   } else {
//     console.log("Profesional creado correctamente!");
//     mongoose.disconnect();
//   }
// };

// movieDocument.save(movieResp);

app.get("/", (req, res) => {
  res.send("Hola desde mi página principal!");
});

app.post("/professionals", (req, res) => {
  Professional.actorActionPush(
    req.body.picture,
    req.body.name,
    req.body.age,
    req.body.genre,
    req.body.weight,
    req.body.height,
    req.body.hairColor,
    req.body.eyeColor,
    req.body.race,
    req.body.isRetired,
    req.body.nationality,
    req.body.oscarsNumber,
    req.body.profession,
    res
  );
});

app.get("/profesionales/id", (req, res) => {
  Professional.getProfessionalsById(res, req.query.id);
});

app.get("/profesionales", (req, res) => {
  Professional.getProfessionals(res);
});

app.put("/profesional", (req, res) => {
  Professional.updateProfessional(
    req.body._id,
    req.body.picture,
    req.body.name,
    req.body.age,
    req.body.genre,
    req.body.weight,
    req.body.height,
    req.body.hairColor,
    req.body.eyeColor,
    req.body.race,
    req.body.isRetired,
    req.body.nationality,
    req.body.oscarsNumber,
    req.body.profession,
    res
  );
});

app.delete("/profesional", (req, res) => {
  Professional.removeProfessional(
    req.body._id,
    req.body.picture,
    req.body.name,
    req.body.age,
    req.body.genre,
    req.body.weight,
    req.body.height,
    req.body.hairColor,
    req.body.eyeColor,
    req.body.race,
    req.body.isRetired,
    req.body.nationality,
    req.body.oscarsNumber,
    req.body.profession,
    res
  );
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Servidor escuchando en Puerto: ${PORT}`));
