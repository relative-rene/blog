// SERVER-SIDE JAVASCRIPT

// Modules and Configuration ////

//require express in our app
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
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

// app.get('/newEvents', function (req, res) {
//   res.sendFile(__dirname + '/views/newEvents.html');
// });

// JSON API Endpoints

// API Controller
app.get('/api', controllers.api.index);

app.get('/api/posts', controllers.posts.index);
app.post('/api/posts', controllers.posts.create);
app.get('/api/posts/:id', controllers.posts.show);
app.delete('/api/posts/:id', controllers.posts.destroy);
app.put('/api/posts/:id', controllers.posts.update);

app.get('templates/:name', controllers.api.templates);


 // redirect all other paths to index
 app.get('*', function homepage (req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000);
  console.log('Express server is up and running on http://localhost:3000/');
