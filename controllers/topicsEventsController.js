// topicEventsController
var db = require('../models');

// app.get('/api/topic/:topicId/events', controllers.topicEvents.index);
function index(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    console.log('responding with events:', foundTopic.events);
    res.json(foundTopic.events);
  });
}

function show(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    if(err) { console.log('topicController.show error', err); }
    console.log('topicController.show responding with', foundTopic);
    res.json(foundTopic);
  });
}


// app.post ('/api/topic/:topicId/events', controllers.topicEvents.create);
function create(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    console.log(req.body);
    var newEvent = new db.Event(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundTopic.events.push(newEvent);
    foundTopic.save(function(err, savedTopic) {
      console.log('newEvent created: ', newEvent);
      res.json(newEvent);  // responding with just the event, some APIs may respond with the parent object (Topic in this case)
    });
  });
}

// app.delete('/api/topic/:topicId/events/:eventId', controllers.topicEvents.destroy);
function destroy(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    console.log(foundTopic);
    // we've got the topic, now find the event within it
    var correctEvent = foundTopic.events.id(req.params.eventId);
    if (correctEvent) {
      correctEvent.remove();
      // resave the topic now that the event is gone
      foundTopic.save(function(err, saved) {
        console.log('REMOVED ', correctEvent.name, 'FROM ', saved.events);
        res.json(correctEvent);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/topic/:topicId/events/:eventId', controllers.topicEvents.update);
function update(req, res) {
  db.Topic.findById(req.params.topicId, function(err, foundTopic) {
    console.log(foundTopic);
    // we've got the topic, now find the event within it
    var correctEvent = foundTopic.events.id(req.params.eventId);
    if (correctEvent) {
      console.log(req.body);
      correctEvent.trackNumber = req.body.trackNumber;
      correctEvent.name = req.body.name;
      foundTopic.save(function(err, saved) {
        console.log('UPDATED', correctEvent, 'IN ', saved.events);
        res.json(correctEvent);
      });
    } else {
      res.send(404);
    }
  });

}


module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
