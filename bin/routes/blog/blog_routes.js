const express = require('express');
const router = express.Router();

//Controllers
const blog_controller = require('../../controllers/blog/blog_controller');

router.post('/add_post', blog_controller.add_blog_post);
router.get('/post/:postid', blog_controller.get_single_post);
router.get('/post/all/:sortby', blog_controller.get_all_posts);

module.exports = router;
