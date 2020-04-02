export const blog_routes = {
  get_single_post: async postid => {
    try {
      const singlePost = await fetch(`/v1/blog/post/${postid}`);
      if (!singlePost) throw new Error('Failed to get post.');
      else return singlePost;
    } catch (error) {
      let err = {
        status: 400,
        message: error.message
      };
      return err;
    }
  },
  get_all_posts: async (config, sortby) => {
    try {
      const allPosts = await fetch(`/v1/blog/post/all/${sortby}`, config);

      if (!allPosts) throw new Error('Failed to get posts.');
      else return allPosts;
    } catch (error) {
      let err = {
        status: 400,
        message: error.message
      };

      return err;
    }
  },
  add_post: async config => {
    try {
      const addPost = await fetch('/v1/blog/add_post', config);

      if (!addPost) throw new Error('Failed to add blog post.');
      else return addPost;
    } catch (error) {
      let err = {
        status: 400,
        message: error.message
      };
      return err;
    }
  },
  remove_post: async (config, postid) => {
    try {
      const removePost = await fetch(`/v1/blog/post/${postid}`, config);

      if (!removePost) throw new Error('Failed to remove blog post.');
      else return removePost;
    } catch (error) {
      let err = {
        status: 400,
        message: error.message
      };
      return err;
    }
  },
  update_post: async (config, postid) => {
    try {
      const updatePost = await fetch(`/v1/blog/post/${postid}`, config);
      if (!updatePost) throw new Error('Failed to update post.');
      else return updatePost;
    } catch (error) {
      let err = {
        status: 400,
        message: error.message
      };
      return err;
    }
  }
};
