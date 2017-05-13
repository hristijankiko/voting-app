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

export function createPoll(req, res){
    console.log("Creating poll");
    let choices = [];
    let formChoices;

    if(!req.body.choices || !req.body.name){
        sendJsonResponse(res, 400, {error: true, message: 'Missing choices or name'});
        return;
    }

    // Create choice ojbects
    formChoices = req.body.choices.split(',');
    formChoices.forEach(function(choice){
        choices.push({name: choice, votes: 0});
    });
    console.log(req.body);
    Poll.create({
        name: req.body.name,
        choices: choices,
        createdBy: req.user.username
    }, function(err, poll){
        if(err){
            sendJsonResponse(res, 300, {error: true, message: "Could not create poll"});
            return;
        }
        sendJsonResponse(res, 201, poll);
    });
}

export function deletePoll(req, res){
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

export function getSpecificPoll(req, res){
    if(!req.params.pollid){
        sendJsonResponse(res, 400, {error: 'Poll id is required.'});
        return;
    }
    Poll.findById(req.params.pollid, function(err, poll){
        sendJsonResponse(res, 200, poll);
        return;
    });
}

export function castVote(req, res){
    console.log("Recieved")
    if(!req.body){
        sendJsonResponse(res, 400, {error: 'Voted choice missing.'});
        return;
    }
    if(!req.user) {
        sendJsonResponse(res, 401, {error: "Not logged in"});
    }

    Poll.findById(req.params.pollid, function(err, poll){
        if(err) {
            sendJsonResponse(res, 400, err);
            return;
        } 
        if (!poll) {
            sendJsonResponse(res, 404, {error: "Poll not found"});
            return;
        }

        for(let i = 0; i < poll.usersVoted.length; i++) {
            if(req.user.username == poll.usersVoted[i]) {
                sendJsonResponse(res, 400, {error: "Already voted"});
                return;
            }
        }

        let pollChoices = poll.choices;
        let found = false;
        for(let i = 0, l = pollChoices.length; i < l; i++) {
            if(pollChoices[i].name === req.body.votedChoice) {
                pollChoices[i].votes++;
                found = true;
                break;
            }
        }

        console.log(pollChoices);
        console.log(found);

        poll.usersVoted.push(req.user.username);

        if(!found) {
            sendJsonResponse(res, 404, {error: "Choice not found"});
            return;
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
