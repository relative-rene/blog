var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventSchema = new Schema({
  date: String,
  topic: String,
  post: String
});
var Events = mongoose.model('Events', EventSchema);
module.exports = Events;
