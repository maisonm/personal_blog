const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: false
  },
  post_body: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
      required: false
    }
  ],
  featuredImage: {
    type: String,
    required: false
  },
  draft: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
