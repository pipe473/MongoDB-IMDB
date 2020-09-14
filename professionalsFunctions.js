let Profesional = require("./Professional");
// let professionalsActors = [];

// Add actors

function actorActionPush(
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
      console.log("Profesional creado Funcionando!");
    }
  });
}

// Show professionals by id

function getProfessionalsById(res, id) {
  Profesional.findById({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

// Show all professionals

function getProfessionals(res) {
  Profesional.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

// Modify a professional data

function updateProfessional (
  id,
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
  
  Profesional.updateOne({_id: id},{picture: picture,
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
    },
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

function removeProfessional (
  id,
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
  
  Profesional.deleteOne({_id: id},{picture: picture,
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
    },
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  actorActionPush,
  getProfessionalsById,
  getProfessionals,
  updateProfessional,
  removeProfessional
};

//*************  PRIMER TEST PARA CREAR PROFESIONALES *************//

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
