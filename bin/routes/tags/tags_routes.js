const express = require('express');
const router = express.Router();

//Controllers
const tags_controller = require('../../controllers/tags/tags_controller');

router.post('/add_tags', tags_controller.add_tags);

module.exports = router;
