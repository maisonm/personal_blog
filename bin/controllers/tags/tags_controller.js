const TagsSchema = require('../../models/tags/Tags');

exports.add_tags = async (req, res, next) => {
  const { body } = req;
  const { post_tags } = body;
  try {
    let postTagArray = [];

    post_tags.forEach(tag => {
      postTagArray.push(tag[0]);
    });

    const Tags = new TagsSchema({
      tags: postTagArray
    });

    const addTags = await Tags.save();

    if (!addTags) throw new Error('Failed to add tags.');

    return res.json({
      addTags
    });
  } catch (e) {
    next(e);
  }
};
