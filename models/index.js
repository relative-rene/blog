var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/BrainChildDeveloper");

module.exports.Post = require('./post');
// module.exports.Campsite =cd require("./campsite.js.example");
