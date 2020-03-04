const express = require('express');
const router = express.Router();

//Controllers
const owner_controller = require('../controllers/owner');

router.post('/register', owner_controller.register);

router.put('/:ownerid', owner_controller.update_owner);

router.get('/account/:ownerid', owner_controller.get_owner_details);

router.get('/account/posts', owner_controller.get_blog_posts);

module.exports = router;
