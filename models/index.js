var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Profile = require('./profile.js');
module.exports.Events = require('./events.js');
module.exports.Pet = require('./pets.js');
// module.exports.Campsite =cd require("./campsite.js.example");
