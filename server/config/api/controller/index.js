'use strict';
var express = require('express');
var router = express.Router();

var controller = require('./moviesController.js');

router.get('/getRecord', controller.getMovies);
router.post('/createRecord', controller.createRecord);



module.exports = router;