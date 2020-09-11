const express = require("express");
const bodyParser = require("body-parser");

let Profesional = require("./Professional");
let Peli = require("./Pelicula");

let mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/imdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// CREANDO PROFESIONAL

let profesionalDocument = new Profesional({
    picture: "Felipe",
    name: "bedoyafelipe743@gmail.com",
    age: 1,
    genre: "",
    weight: 2,
    height: 1,
    hairColor:"",
    eyeColor:"",
    race:"",
    isRetired: false,
    nationality:"",
    oscarsNumber: 2,
    profession:""
  });
  
  profesionalResp = (err, res) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Profesional creado correctamente!");
      mongoose.disconnect();
    }
  };
  
  profesionalDocument.save(profesionalResp);



  // CREANDO PELICULA

let movieDocument = new Peli({
    picture: "first",
    title: "none",
    releaseYear: 1,
    nationality: "spain",
    genre: "action",
    actores: ["Pepe","Jose"],
    director:"Juan",
    writer:"Joan",
    language:"spanish",
    platform: "Netflix",
    isMCU:true,
    mainCharacterName: "Jose",
    producer:"Peter",
    distribuitor:"Daniel",
    genre:"man"
  });
  
  movieResp = (err, res) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Profesional creado correctamente!");
      mongoose.disconnect();
    }
  };
  
  movieDocument.save(movieResp);

app.get('/', (req, res) => {
    res.send('Hola desde mi página principal!');
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Servidor escuchando en Puerto: ${PORT}`));