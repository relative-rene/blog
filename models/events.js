var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Events = require('./events');



var EventSchema = new Schema({
  Goal: String,
  DueDate: String,
  Summary: String
});
var Events = mongoose.model('Events', EventSchema);
module.exports = Events;
