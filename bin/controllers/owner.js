exports.register = (req, res, next) => {
  console.log(req.body);
};

exports.update_owner = (req, res, next) => {
  console.log('update owner');
};

exports.get_owner_details = (req, res, next) => {
  console.log('get owner');
};

exports.get_blog_posts = (req, res, next) => {
  console.log('get blog posts');
};
