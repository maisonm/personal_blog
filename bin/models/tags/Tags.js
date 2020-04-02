const mongoose = require('mongoose');

const TagsSchema = new mongoose.Schema({
  tags: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = mongoose.model('Tags', TagsSchema);
