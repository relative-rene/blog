// require express and other modules
var express = require('express'),
    db = require('./models'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "https://github.com/relative-rene/express-personal-api", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/Events", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  });
});
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all events
app.get('/api/events', function (req,res) {
  //send all events as json res
  db.Events.find().populate('events').exec(function(err,Events){
    if(err){ return console.log("index error: " +err);
  }
    res.json(Events);
  });
});

// get all events
app.get('/api/events', function (req, res) {
  // send all books as JSON response
  db.Events.find().populate('events').exec(function(err, Events) {
      if (err) { return console.log("index error: " + err); }
      res.json(Events);
  });
});

// get one Events
app.get('/api/events/:id', function (req, res) {
  db.Events.findOne({_id: req.params._id }, function(err, data) {
    res.json(data);
  });
});

// create new Events
app.post('/api/events', function (req, res) {
  // create new book with form data (`req.body`)
  var newEvents = new db.Events({
    name: req.body.name,
    link: req.body.link,
    image: req.body.image,
    city: req.body.city,
    pets: req.body.pets
  });
  // find the author from req.body
  db.Events.findOne({name: req.body.Events}, function(err, Events){
    if (err) {
      return console.log(err);
    }
    // add this author to the bookz
    newEvents.Events = Events;

    // save newEvents to database
    newEvents.save(function(err, Events){
      if (err) {
        return console.log("save error: " + err);
      }
      console.log("saved ", Events.title);
      // send back the Events!
      res.json(Events);
    });
  });
});

// delete Events
app.delete('/api/events/:id', function (req, res) {
  // get Events id from url params (`req.params`)
  console.log('Events delete', req.params);
  var EventsId = req.params.id;
  // find the index of the book we want to remove
  db.Events.findOneAndRemove({ _id: EventsId }, function (err, deletedEvents) {
    res.json(deletedEvents);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
