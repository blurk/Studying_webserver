var express = require('express');

const controller = require('../controller/user.controller');

const router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' })// where to upload

const validate = require("../validate/user.validate");

router.get('/' ,controller.index)

router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 12345);
    res.send('Hello');
    res.render('users/index'); 
})

router.get('/search', controller.search)
							
router.get('/create', controller.create)

router.get('/:id', controller.id)

router.post('/create', 
    upload.single('avatar'),
    validate.postCreate, 
    controller.postCreate
)

module.exports = router;