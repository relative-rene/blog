var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  "mongodb://localhost/blog");

module.exports.Post = require('./post');
// module.exports.Campsite =cd require("./campsite.js.example");
