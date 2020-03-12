const BlogPost = require('../../models/blog/blog_post');
const date_ = require('../utils/date_');

exports.add_blog_post = async (req, res, next) => {
  const { body } = req;
  const { title, author, featuredImage, post_body, draft } = body;

  try {
    const newBlogPost = new BlogPost({
      date: new Date(),
      title,
      author,
      post_body,
      featuredImage,
      draft
    });

    const saveBlogPost = await newBlogPost.save();

    if (!saveBlogPost) throw new Error('Blog post could not be saved.');

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

exports.get_single_post = async (req, res, next) => {
  const { params } = req;
  const { postid } = params;

  try {
    const findPost = await BlogPost.findOne({ _id: postid });

    if (!findPost) throw new Error('Blog post not found.');

    res.json({
      post: findPost
    });
  } catch (err) {
    next(err);
  }
};

exports.get_all_posts = async (req, res, next) => {
  const { params } = req;
  const { sortby } = params;

  //Sortby param takes two arguments for now: most_recent, oldest
  try {
    const getAllPosts = await BlogPost.find({}, { _id: 0 });

    if (!getAllPosts) throw new Error('Could not get blog posts.');

    res.json({
      posts: date_.sort(getAllPosts, sortby)
    });
  } catch (error) {
    next(error);
  }
};
