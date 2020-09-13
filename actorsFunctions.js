let Profesional = require("./Professional");


 module.exports = actorAction = (picture, name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, resp) => {
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
        profession: profession
    };

    Profesional.create(professionalData, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(result);
        console.log("Funciona!");
      }
    });
  }