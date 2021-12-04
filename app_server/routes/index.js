var express = require('express');
var router = express.Router();

// require the main controllers file
const ctrlHome = require('../controllers/home');
const ctrlAbout = require('../controllers/about');
const ctrlMenu = require('../controllers/menu')

//Reference the index method of the controllers in the route definition
router.get('/', ctrlHome.index)
router.get('/about', ctrlAbout.about)
router.get('/about/review/new', ctrlAbout.addReview);
router.get('/menu', ctrlMenu.menu)

module.exports = router;
