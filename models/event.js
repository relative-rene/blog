var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventSchema = new Schema({
  date: String,
  topic: String,
  post: String
});

module.exports = mongoose.model('Event', EventSchema);
