var mongoose = require('mongoose');
  Schema = mongoose.Schema;

  var PostSchema = new Schema({
    date: { type:Date, default: Date.now},
    title: String,
    content: String,
    tags: [String],
    image: String,
    postLength: Number
  });

  var Post = mongoose.model('Post', PostSchema);
  module.exports = Post;
