'use strict';

var express = require('express');
var router = express.Router();

var ctrlPolls = require('../controllers/polls.js');

// Polls
router.get('/polls', ctrlPolls.pollsList);
router.post('/polls', ctrlPolls.createPoll);
router.get('/polls/:pollid', ctrlPolls.getSpecificPoll);
router.put('/polls/:pollid', ctrlPolls.castVote);
router.delete('/polls/:pollid', ctrlPolls.deletePoll);

module.exports = router;