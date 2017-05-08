let express = require('express');
let router = express.Router();
import passport from 'passport';
import authenticationMiddleware from '../passport/authenticationMiddleware';

let ctrlPolls = require('../controllers/polls.js');
let ctrlAuth = require('../controllers/auth.js');

// Polls
router.get('/polls', ctrlPolls.pollsList);
router.post('/polls', authenticationMiddleware, ctrlPolls.createPoll);
router.get('/polls/:pollid', ctrlPolls.getSpecificPoll);
router.put('/polls/:pollid', authenticationMiddleware, ctrlPolls.castVote);
router.delete('/polls/:pollid', authenticationMiddleware, ctrlPolls.deletePoll);

// Authentication
 router.post('/auth/login', passport.authenticate('local'), ctrlAuth.login);
 router.post('/auth/register', ctrlAuth.register);
 router.get('/auth/logout', ctrlAuth.logout);

module.exports = router;