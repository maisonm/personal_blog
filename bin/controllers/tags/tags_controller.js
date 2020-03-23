const TagsSchema = require('../../models/tags/Tags');

exports.add_tags = async (req, res, next) => {
  const { body } = req;
  const { post_tags } = body;
  try {
    const Tags = new TagsSchema({
      tags: post_tags
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
