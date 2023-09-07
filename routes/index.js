const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const iphoneController = require('../controllers/iphoneController');
const samsungController = require('../controllers/samsungController');
const oneplusController = require('../controllers/oneplusController');
const macbookController = require('../controllers/macbookController');
const boatController = require('../controllers/boatController');
const menController = require('../controllers/menController');

router.get('/',homeController.home);
router.get('/iphones',iphoneController.display);
router.get('/samsung',samsungController.display);
router.get('/oneplus',oneplusController.display);
router.get('/macbook',macbookController.display);
router.get('/boat',boatController.display);
router.get('/men',menController.display);
router.use('/users',require('./users'));
router.use('/admin',require('./admin'));

module.exports = router;