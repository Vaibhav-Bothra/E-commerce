const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/userController');
const cartController = require('../controllers/cartController');

router.get('/signin',passport.alreadyAuthenticated,userController.signIn);
router.get('/signup',passport.alreadyAuthenticated,userController.signUp);
router.get('/cart/',passport.checkAuthentication,cartController.add);
router.get('/cartshow',passport.checkAuthentication,cartController.show);
router.get('/add/:idx',passport.checkAuthentication,cartController.addqty);
router.get('/subtract/:idx',passport.checkAuthentication,cartController.subtractqty);
router.get('/delete/:idx',passport.checkAuthentication,cartController.delete);
 
router.post('/create',userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'}
), userController.createSession);

module.exports = router;