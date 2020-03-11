export const blog_routes = {
  add_post: '/v1/blog/add_post',
  get_single_post: postid => `/v1/blog/post/${postid}`,
  get_all_posts: sortby => `/v1/blog/post/all/${sortby}`
};
