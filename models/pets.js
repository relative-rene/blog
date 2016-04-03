var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pet = require('./pet');


var PetSchema = new Schema({
    name: String,
    current_city: String,
    age: String,
    favoriteDogParks:[String],
    favoriteSnack: [String]
  });
var Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
