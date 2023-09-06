const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/userController');
const cartController = require('../controllers/cartController');

router.get('/signin',passport.alreadyAuthenticated,userController.signIn);
router.get('/signup',passport.alreadyAuthenticated,userController.signUp);
router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/cart/',passport.checkAuthentication,cartController.add);
router.get('/cartshow',passport.checkAuthentication,cartController.show);
router.get('/buy',passport.checkAuthentication,cartController.buy);
router.get('/add/:idx',passport.checkAuthentication,cartController.addqty);
router.get('/subtract/:idx',passport.checkAuthentication,cartController.subtractqty);
router.get('/delete/:idx',passport.checkAuthentication,cartController.delete);
router.get('/review',userController.review);
router.get('/signout',userController.signOut);

router.post('/create',userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'}
    ), userController.createSession);
router.post('/createreview',userController.createreview);
    
module.exports = router;