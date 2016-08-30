/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/posts
function index(req, res) {
  db.Post.find({}, function(err, allPosts) {
    res.json(allPosts);
  });
}

function create(req, res) {
  console.log('body', req.body);

  // split at comma and remove and trailing space
  if (req.body.tags) {
    var tags = req.body.tags.split(',').map(function(item) { return item.trim(); } );
    req.body.tags = tags;
  }

  db.Post.create(req.body, function(err, post) {
    if (err) { console.log('error', err); }
    console.log(post);
    res.json(post);
  });
}

function show(req, res) {
  db.Post.findById(req.params.postId, function(err, foundPost) {
    if(err) { console.log('postsController.show error', err); }
    console.log('postsController.show responding with', foundPost);
    res.json(foundPost);
  });
}

function destroy(req, res) {
  db.Post.findOneAndRemove({ _id: req.params.postId }, function(err, foundPost){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundPost);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Post.findById(req.params.postId, function(err, foundPost) {
    if(err) { console.log('postsController.update error', err); }
    foundPost.title = req.body.title;
    foundPost.content = req.body.content;
    foundPost.tags = req.body.tags;
    foundPost.save(function(err, savedPost) {
      if(err) { console.log('saving altered post failed'); }
      res.json(savedPost);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
