/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/topic
function index(req, res) {
  db.Topic.find({}, function(err, allTopics) {
    res.json(allTopics);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Topic.create(req.body, function(err, topic) {
    if (err) { console.log('error', err); }
    console.log(topic);
    res.json(topic);
  });
}

function show(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    if(err) { console.log('topicController.show error', err); }
    console.log('topicController.show responding with', foundTopic);
    res.json(foundTopic);
  });
}

function destroy(req, res) {
  db.Topic.findOneAndRemove({ _id: req.params.topicId }, function(err, foundTopic){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundTopic);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    if(err) { console.log('topicController.update error', err); }
    foundTopic.name = req.body.name;
    foundTopic.link = req.body.link;
    foundTopic.image = req.body.image;
    foundTopic.city = req.body.city;
    foundTopic.events = req.body.events;
    foundTopic.save(function(err, savedTopic) {
      if(err) { console.log('saving altered topic failed'); }
      res.json(savedTopic);
    });
  });
}

 module.exports = {
 index: index,
 create: create,
 show: show,
 destroy: destroy,
 update: update
 };
