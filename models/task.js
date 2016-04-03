var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Task = require('./task');


var TaskSchema = new Schema({
  Goal: String,
  DueDate: String,
  Summary: String
});
var Task = mongoose.model('task', ProfileSchema);
module.exports = Task;
