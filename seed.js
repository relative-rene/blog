//  This file allows us to seed our application with data
//  simply run: `node seed.js` from the root of this project folder.
//
var db = require('./models');


// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
 var new_topic = {name: "Rene Arellano", github_link: "https://github.com/relative-rene", image: "/public/images/faceBookPic.jpg", city: "San Francisco"};

//  db.Campsite.create(new_campsite, function(err, campsite){
//    if (err){
//      return console.log("Error:", err);
//    }
//
//    console.log("Created new campsite", campsite._id)
//    process.exit(); // we're all done! Exit the program.
//  })
  db.Topic.create(new_topic, function(err, topic){
    if (err){
      return console.log("Error:", err);
    }
    console.log("Created new topic", topic._id);
    process.exit();
  });
