const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const iphoneController = require('../controllers/iphoneController');
const samsungController = require('../controllers/samsungController');

router.get('/',homeController.home);
router.get('/iphones',iphoneController.display);
router.get('/samsung',samsungController.display);
router.use('/users',require('./users'));

module.exports = router;