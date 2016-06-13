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

app.get('/newEvents', function (req, res) {
  res.sendFile(__dirname + '/views/newEvents.html');
});

/*
 * JSON API Endpoints
 */
 app.get('/api', controllers.api.index);

 app.get('/api/profile', controllers.profile.index);
 app.get('/api/profile/:eventId', controllers.profile.show);
 app.post('/api/profile/events', controllers.profile.create);
 app.delete('/api/profile/:eventId', controllers.profile.destroy);
 app.put('/api/profile/:eventId', controllers.profile.update);

 app.get('/templates/:name', controllers.api.templates);

 // ALL OTHER ROUTES (ANGULAR HANDLES)
 // redirect all other paths to index
 app.get('*', function homepage (req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
