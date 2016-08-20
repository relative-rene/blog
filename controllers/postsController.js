var db = require('../models');

function index(req, res) {
  db.Post
    .find({})
    .exec(function(err, posts){
      if (err || !posts || !posts.length) {
        return res.status(404).send({message: 'Posts not found.'});
      }
      res.send(posts);
    });
}

function create(req, res){
  var new_post = new Post(req.body);
  new_post.save(function(err, new_post){
    res.send(new_post);
  });
}

function show(req, res){
  db.Post
    .findById(req.params.id)
    .exec(function(err, found_post){
      if (err || !found_post) {
        return res.status(404).send({message: 'Post not found.'});
      }
      res.send(found_post);
    });
}

function update(req, res){
  var query = {
    _id: req.params.id
  };

  db.Post
    .findOneAndUpdate(query, req.body)
    .exec(function(err, post){
      if (err || !post) {
        console.log(post);
        return res.status(404).send({messsage: 'Failed to update post.'});
      }
      res.status(204).send();
    });
}

function destroy(req, res){
  var query = {
    _id: req.params.id
  };

  db.Post
    .findOneAndRemove(query)
    .exec(function(err, post){
      if (err || !post) {
        return res.status(404).send({messsage: 'Failed to delete post.'});
      }
      res.status(204).send(query);
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
