'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pollsList = pollsList;
exports.createPoll = createPoll;
exports.deletePoll = deletePoll;
exports.getSpecificPoll = getSpecificPoll;
exports.castVote = castVote;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Poll = _mongoose2.default.model('Poll');

var sendJsonResponse = function sendJsonResponse(res, status, content) {
    res.status(status);
    res.json(content);
};

function pollsList(req, res) {
    Poll.find({}, function (err, polls) {
        if (err) {
            res.send(err);
        }
        sendJsonResponse(res, 200, polls);
    });
}

function createPoll(req, res) {
    console.log("Creating poll");
    var choices = [];
    var formChoices = void 0;

    if (!req.body.choices || !req.body.name) {
        sendJsonResponse(res, 400, { error: 'Missing choices or name' });
        return;
    }

    // Create choice ojbects
    formChoices = req.body.choices.split(',');
    formChoices.forEach(function (choice) {
        choices.push({ name: choice, votes: 0 });
    });
    console.log(req.body);
    Poll.create({
        name: req.body.name,
        choices: choices,
        createdBy: req.user.username
    }, function (err, poll) {
        if (err) {
            res.send(err);
            return;
        }
        sendJsonResponse(res, 201, poll);
    });
}

function deletePoll(req, res) {
    if (!req.params.pollid) {
        sendJsonResponse(res, 400, { error: 'Poll id is required' });
        return;
    }
    Poll.findByIdAndRemove(req.params.pollid, function (err, poll) {
        if (!poll) {
            sendJsonResponse(res, 404, { error: "Poll not found" });
            return;
        }
        if (err) {
            sendJsonResponse(res, 204, err);
            return;
        }
        sendJsonResponse(res, 200, poll);
    });
}

function getSpecificPoll(req, res) {
    if (!req.params.pollid) {
        sendJsonResponse(res, 400, { error: 'Poll id is required.' });
        return;
    }
    Poll.findById(req.params.pollid, function (err, poll) {
        sendJsonResponse(res, 200, poll);
        return;
    });
}

function castVote(req, res) {
    console.log("Recieved");
    if (!req.body) {
        sendJsonResponse(res, 400, { error: 'Voted choice missing.' });
        return;
    }
    if (!req.user) {
        sendJsonResponse(res, 401, { error: "Not logged in" });
    }

    Poll.findById(req.params.pollid, function (err, poll) {
        if (err) {
            sendJsonResponse(res, 400, err);
            return;
        }
        if (!poll) {
            sendJsonResponse(res, 404, { error: "Poll not found" });
            return;
        }

        for (var i = 0; i < poll.usersVoted.length; i++) {
            if (req.user.username == poll.usersVoted[i]) {
                sendJsonResponse(res, 400, { error: "Already voted" });
                return;
            }
        }

        var pollChoices = poll.choices;
        var found = false;
        for (var _i = 0, l = pollChoices.length; _i < l; _i++) {
            if (pollChoices[_i].name === req.body.votedChoice) {
                pollChoices[_i].votes++;
                found = true;
                break;
            }
        }

        console.log(pollChoices);
        console.log(found);

        poll.usersVoted.push(req.user.username);

        if (!found) {
            sendJsonResponse(res, 404, { error: "Choice not found" });
            return;
        }

        poll.save(function (err, poll) {
            if (err) {
                sendJsonResponse(res, 400, err);
                return;
            }
            sendJsonResponse(res, 200, poll);
        });
    });
}