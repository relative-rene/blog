 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;
   Event = require('./event');


 var ProfileSchema = new Schema({
     name: String,
     link: String,
     image: String,
     city: String,
     events: [Event.schema]
 });
 var Profile = mongoose.model('Profile', ProfileSchema);
 module.exports = Profile;
