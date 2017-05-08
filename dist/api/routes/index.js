'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _authenticationMiddleware = require('../passport/authenticationMiddleware');

var _authenticationMiddleware2 = _interopRequireDefault(_authenticationMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();


var ctrlPolls = require('../controllers/polls.js');
var ctrlAuth = require('../controllers/auth.js');

// Polls
router.get('/polls', ctrlPolls.pollsList);
router.post('/polls', _authenticationMiddleware2.default, ctrlPolls.createPoll);
router.get('/polls/:pollid', ctrlPolls.getSpecificPoll);
router.put('/polls/:pollid', _authenticationMiddleware2.default, ctrlPolls.castVote);
router.delete('/polls/:pollid', _authenticationMiddleware2.default, ctrlPolls.deletePoll);

// Authentication
router.post('/auth/login', _passport2.default.authenticate('local'), ctrlAuth.login);
router.post('/auth/register', ctrlAuth.register);
router.get('/auth/logout', ctrlAuth.logout);

module.exports = router;