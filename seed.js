//  This file allows us to seed our application with data
//  simply run: `node seed.js` from the root of this project folder.
//
var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
 var new_profile = {name: "Rene Arellano", github_link: "https://github.com/relative-rene", image: "/public/images/faceBookPic.jpg", city: "San Francisco"};

//  db.Campsite.create(new_campsite, function(err, campsite){
//    if (err){
//      return console.log("Error:", err);
//    }
//
//    console.log("Created new campsite", campsite._id)
//    process.exit(); // we're all done! Exit the program.
//  })
  db.Profile.create(new_profile, function(err, profle){
    if (err){
      return console.log("Error:", err);
    }
    console.log("Created new profile", profile._id);
    process.exit();
  });
