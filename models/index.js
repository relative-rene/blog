var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Topic = require('./topic');
module.exports.Event = require('./event');
// module.exports.Campsite =cd require("./campsite.js.example");
