//  This file allows us to seed our application with data
//  simply run: `node seed.js` from the root of this project folder.
//
var db = require('./models');


// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
// all tags should "DevLife","exploratoryStudy", "GoodNews",
  var blogs= [
    {
    title: "Life Defined by Limits",
    content: "I feel were born over stimulated.  Expelled from the whomb our senses are bombarded with the noise. From that first day, we begin decipher the world. From a time when the gravity was unbareable. The child has to breathe form himself, keep temperature, and struggle with the relentless pull of gravity.",
    image: "images/Dark-Grey-Background-img.jpg",
    tags: ["DevLife","exploratoryStudy"],
    postLength: 5,
  },
    {
    title: "Will skipping ever die",
    content: " I skipped the other, I don't know how I feel about it",
    image: "images/faceBookPic.jpg",
    tags: ["exploratoryStudy"],
    postLength: 3,
  },
  {
    title: "You know sometimes",
    content: " When I see a new born, I cant help but notice how over oversWhen you get older, your friends have kids.  You see  hybrid of two people you know, I couldn't halp but think that ",
    image: "/images/Lightgreen-chalkboard.jpg",
    tags: ["exploratoryStudy"],
    postLength: 9,
}];

//  db.Campsite.create(new_campsite, function(err, campsite){
//    if (err){
//      return console.log("Error:", err);
//    }
//
//    console.log("Created new campsite", campsite._id)
//    process.exit(); // we're all done! Exit the program.
//  })

db.Post.remove({}, function(){
  db.Post.create(blogs, function(err, blog){
    if (err){ return console.log("Error:", err); }
    console.log("Created", blog.length, "posts" + blog);
    process.exit();
  });
});
