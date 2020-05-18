var express = require('express');
const shortid = require('shortid');

const router = express.Router();

const controller = require('../controller/user.controller');

router.get('/', controller.index)

router.get('/search', controller.search)
							
router.get('/create', controller.create)

router.get('/:id', controller.id)

router.post('/create', controller.postCreate)

module.exports = router;