 var mongoose = require('mongoose'),
   Schema = mongoose.Schema;
   Event = require('./event');


 var TopicSchema = new Schema({
     name: String,
     github_link: String,
     image: String,
     city: String,
     events: [Event.schema]
 });
 var Topic = mongoose.model('Topic', TopicSchema);
 module.exports = Topic;
