var mongoose = require('mongoose'),
  Schema = mongoose.Schema;



var EventSchema = new Schema({
  Goal: String,
  DueDate: String,
  Summary: String
});
var Event = mongoose.model('Event', EventSchema);
module.exports = Event;
