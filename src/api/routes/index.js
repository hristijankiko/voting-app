let express = require('express');
let router = express.Router();

let ctrlPolls = require('../controllers/polls.js');

// Polls
router.get('/polls', ctrlPolls.pollsList);
router.post('/polls', ctrlPolls.createPoll);
router.get('/polls/:pollid', ctrlPolls.getSpecificPoll);
router.put('/polls/:pollid', ctrlPolls.castVote);
router.delete('/polls/:pollid', ctrlPolls.deletePoll);

module.exports = router;