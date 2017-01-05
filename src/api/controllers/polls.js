import mongoose from 'mongoose';
let Poll = mongoose.model('Poll');

let sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

export function pollsList(req, res){
    Poll.find({}, function(err, polls){
        if(err){
            res.send(err);
        }
        sendJsonResponse(res, 200, polls);
    });
}

module.exports.createPoll = function(req, res){
    let choices = [];
    let formChoices;

    if(!req.body.choices || !req.body.name){
        sendJsonResponse(res, 400, {error: 'Missing choices or name'});
        return;
    }

    // Create choice ojbects
    formChoices = req.body.choices.split(',');
    formChoices.forEach(function(choice){
        choices.push({name: choice, votes: 0});
    });

    Poll.create({
        name: req.body.name,
        choices: choices 
    }, function(err, poll){
        if(err){
            res.send(err);
            return;
        }
        sendJsonResponse(res, 201, poll);
    });
}

module.exports.deletePoll = function(req, res){
    if(!req.params.pollid){
        sendJsonResponse(res, 400, {error: 'Poll id is required'});
        return;
    }
    Poll.findByIdAndRemove(req.params.pollid, function(err, poll){
        if(!poll) {
            sendJsonResponse(res, 404, {error: "Poll not found"});
            return;
        }
        if(err){
            sendJsonResponse(res, 204, err);
            return;
        }
        sendJsonResponse(res, 200, poll);
    });
}

module.exports.getSpecificPoll = function(req, res){
    if(!req.params.pollid){
        sendJsonResponse(res, 400, {error: 'Poll id is required.'});
        return;
    }
    Poll.findById(req.params.pollid, function(err, poll){
        sendJsonResponse(res, 200, poll);
    });
}

module.exports.castVote = function(req, res){
    if(!req.body){
        sendJsonResponse(res, 400, {error: 'Voted choice missing.'});
        return;
    }
    Poll.findById(req.params.pollid, function(err, poll){
        let pollChoices = poll.choices;
        for(let i = 0, l = pollChoices.length; i < l; i++) {
            if(pollChoices[i].name === req.body.votedChoice) {
                pollChoices[i].votes++;
                break;
            }
        }
        poll.save(function(err, poll){
            if(err){
                sendJsonResponse(res, 400, err);
                return;
            }
            sendJsonResponse(res, 200, poll);
        });
    });
}
