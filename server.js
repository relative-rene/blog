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

app.get('/api/topics', controllers.topics.index);
app.get('/api/topics/:topicId', controllers.topics.show);
app.post('/api/topics', controllers.topics.create);
app.delete('/api/topics/:topicId', controllers.topics.destroy);
app.put('/api/topics/:topicId', controllers.topics.update);

app.get('/api/topics/:topicId/events', controllers.topicsEvents.index);
app.get('/api/topics/:topicId/events/:eventId', controllers.topicsEvents.show);
app.post('/api/topics/:topicId/events', controllers.topicsEvents.create);
app.delete('/api/topics/:topicId/events/:eventId', controllers.topicsEvents.destroy);
app.put('/api/topics/:topicId/events/:eventId', controllers.topicsEvents.update);

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
