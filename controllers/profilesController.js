/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/profile
function index(req, res) {
  db.Profile.find({}, function(err, allProfiles) {
    res.json(allProfiles);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Profile.create(req.body, function(err, profile) {
    if (err) { console.log('error', err); }
    console.log(profile);
    res.json(profile);
  });
}

function show(req, res) {
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    if(err) { console.log('profileController.show error', err); }
    console.log('profileController.show responding with', foundProfile);
    res.json(foundProfile);
  });
}

function destroy(req, res) {
  db.Profile.findOneAndRemove({ _id: req.params.profileId }, function(err, foundProfile){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundProfile);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Profile.findById(req.params.profileId, function(err, foundProfile) {
    if(err) { console.log('profileController.update error', err); }
    foundProfile.name = req.body.name;
    foundProfile.link = req.body.link;
    foundProfile.image = req.body.image;
    foundProfile.city = req.body.city;
    foundProfile.events = req.body.events;
    foundProfile.save(function(err, savedProfile) {
      if(err) { console.log('saving altered profile failed'); }
      res.json(savedProfile);
    });
  });

}
// uncomment module.exprts once I have decided to allow multiple profiles

 module.exports = {
 index: index,
 create: create,
 show: show,
 destroy: destroy,
 update: update
 };
