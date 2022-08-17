const mongoose =require('mongoose') ;

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  upvote: {type: Number, default: 0},
  downvote: {type: Number, default: 0}
}, 
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
