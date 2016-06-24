// profileEventsController
var db = require('../models');

// app.get('/api/profile/:profileId/events', controllers.profileEvents.index);
function index(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    console.log('responding with events:', foundProfile.events);
    res.json(foundProfile.events);
  });
}

function show(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    if(err) { console.log('profileController.show error', err); }
    console.log('profileController.show responding with', foundProfile);
    res.json(foundProfile);
  });
}


// app.post ('/api/profile/:profileId/events', controllers.profileEvents.create);
function create(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    console.log(req.body);
    var newEvent = new db.Event(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundProfile.events.push(newEvent);
    foundProfile.save(function(err, savedProfile) {
      console.log('newEvent created: ', newEvent);
      res.json(newEvent);  // responding with just the event, some APIs may respond with the parent object (Profile in this case)
    });
  });
}

// app.delete('/api/profile/:profileId/events/:eventId', controllers.profileEvents.destroy);
function destroy(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    console.log(foundProfile);
    // we've got the profile, now find the event within it
    var correctEvent = foundProfile.events.id(req.params.eventId);
    if (correctEvent) {
      correctEvent.remove();
      // resave the profile now that the event is gone
      foundProfile.save(function(err, saved) {
        console.log('REMOVED ', correctEvent.name, 'FROM ', saved.events);
        res.json(correctEvent);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/profile/:profileId/events/:eventId', controllers.profileEvents.update);
function update(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    console.log(foundProfile);
    // we've got the profile, now find the event within it
    var correctEvent = foundProfile.events.id(req.params.eventId);
    if (correctEvent) {
      console.log(req.body);
      correctEvent.trackNumber = req.body.trackNumber;
      correctEvent.name = req.body.name;
      foundProfile.save(function(err, saved) {
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
