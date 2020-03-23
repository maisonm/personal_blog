const BlogPost = require('../../models/blog/BlogPost');
const date_ = require('../utils/date_');

exports.add_blog_post = async (req, res, next) => {
  const { body } = req;
  const {
    title,
    author,
    featuredImage,
    description,
    post_body,
    draft,
    tags
  } = body;

  try {
    const tagsArr = ['Js', 'React', 'Node'];
    const newBlogPost = new BlogPost({
      date: new Date(),
      title,
      author,
      post_body,
      featuredImage,
      draft,
      description,
      tags: tagsArr
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
    const getAllPosts = await BlogPost.find({});

    if (!getAllPosts) throw new Error('Could not get blog posts.');

    res.json({
      posts: date_.sort(getAllPosts, sortby)
    });
  } catch (error) {
    next(error);
  }
};

exports.remove_post = async (req, res, next) => {
  const { params } = req;
  const { postid } = params;

  try {
    const removePost = await BlogPost.findOneAndDelete({ _id: postid });

    if (!removePost) throw new Error('Failed to remove blog post.');
    else {
      return res.json({
        message: `Succesfuly removed blog post: ${postid}`
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.update_post = async (req, res, next) => {
  const { params, body } = req;
  const { postid } = params;
  const { updatedPost } = body;

  try {
    const updatePost = await BlogPost.findByIdAndUpdate(
      { _id: postid },
      updatedPost,
      { useFindAndModify: false }
    );
    if (!updatePost) throw new Error('Post could not be updated.');

    return res.json({
      message: 'Successfuly updated the post.'
    });
  } catch (error) {
    next(error);
  }
};
