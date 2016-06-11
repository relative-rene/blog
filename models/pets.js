var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pets = require('./pets');


var PetSchema = new Schema({
    name: String,
    current_city: String,
    age: String,
    favoriteDogParks:[String],
    favoriteSnack: [String]
  });
var Pets = mongoose.model('Pets', PetSchema);
module.exports = Pets;
