 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;
   Profile = require('./profile');


 var ProfileSchema = new Schema({
     name: String,
     link: String,
     image: String,
     city: String,
     pets: [String]
 });
 var Profile = mongoose.model('Profile', ProfileSchema);
 module.exports = Profile;
