// require express and other modules
var express = require('express'),
    db = require('./models'),
    app = express(),
    bodyParser = require('body-parser');


// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));
// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/************
 * DATABASE *
 ************/
 var ejs = require('ejs');
 app.engine('html', ejs.renderFile);
 app.set('view engine', 'html');
// var db = require('./models');
var controllers = require('./controllers');
/**********
 * ROUTES *
 **********/


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

app.get('/api/profiles', controllers.profiles.index);
app.get('/api/profiles/:profileId', controllers.profiles.show);
app.post('/api/profiles', controllers.profiles.create);
app.delete('/api/profiles/:profileId', controllers.profiles.destroy);
app.put('/api/profiles/:profileId', controllers.profiles.update);

app.get('/api/profiles/:profileId/events', controllers.profilesEvents.index);
app.get('/api/profiles/:profileId/events/:eventId', controllers.profilesEvents.show);
app.post('/api/profiles/:profileId/events', controllers.profilesEvents.create);
app.delete('/api/profiles/:profileId/events/:eventId', controllers.profilesEvents.destroy);
app.put('/api/profiles/:profileId/events/:eventId', controllers.profilesEvents.update);

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
