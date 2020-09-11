let mongoose = require("mongoose");
// let User = require("./user");
// const {subidaFotos, getPhotos, followUser, deletePhoto, deleteFieldPhoto} = require("./usersFunctions");

mongoose.connect("mongodb://localhost:27017/codenotch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});