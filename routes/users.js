const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/signin',passport.alreadyAuthenticated,userController.signIn);
router.get('/signup',passport.alreadyAuthenticated,userController.signUp);

router.post('/create',userController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/signin'}
), userController.createSession);

module.exports = router;