let Profesional = require("./Professional");

function actorPushAction(
  picture,
  name,
  age,
  genre,
  weight,
  height,
  hairColor,
  eyeColor,
  race,
  isRetired,
  nationality,
  oscarsNumber,
  profession,
  res
) {
  const professionalData = {
    picture: picture,
    name: name,
    age: age,
    genre: genre,
    weight: weight,
    height: height,
    hairColor: hairColor,
    eyeColor: eyeColor,
    race: race,
    isRetired: isRetired,
    nationality: nationality,
    oscarsNumber: oscarsNumber,
    profession: profession,
  };

  Profesional.create(professionalData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("Funciona!");
    }
  });
};

//***********  PRIMERAS PRUEBAS CREANDO PROFESIONAL *************//

// let profesionalDocument = new Profesional({
//     picture: "Felipe",
//     name: "bedoyafelipe743@gmail.com",
//     age: 1,
//     genre: "",
//     weight: 2,
//     height: 1,
//     hairColor:"",
//     eyeColor:"",
//     race:"",
//     isRetired: false,
//     nationality:"",
//     oscarsNumber: 2,
//     profession:""
//   });

//   profesionalResp = (err, res) => {
//     if (err) {
//       console.log("Error: " + err);
//     } else {
//       console.log("Profesional creado correctamente!");
//       mongoose.disconnect();
//     }
//   };

//   profesionalDocument.save(profesionalResp);

module.exports = {
    actorPushAction
}
