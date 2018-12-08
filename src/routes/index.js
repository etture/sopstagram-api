const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportService = require('../services/passport');

const UsersController = require('../controllers/UsersController');
const ContentsController = require('../controllers/ContentsController');
const CommentsController = require('../controllers/CommentsController');

//Use requireAuth for any request that is executed while signed in
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

router.post('/users/login', requireSignin, UsersController.login);
router.post('/users/signup', UsersController.signup);

router.post('/contents', requireAuth, ContentsController.registerContent);
router.post('/contents/all', requireAuth, ContentsController.getAll);
router.post('/contents/like', requireAuth, ContentsController.like);

router.post('/comments', requireAuth, CommentsController.registerComment);
router.post('/comments/all', requireAuth, CommentsController.getAll);
router.post('/comments/like', requireAuth, CommentsController.like);

module.exports = router;