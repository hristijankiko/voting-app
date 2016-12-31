module.exports.pollsList = function(req, res){
    res.send("Show all polls");
}

module.exports.createPoll = function(req, res){
    res.send("Create poll");
}

module.exports.deletePoll = function(req, res){
    res.send("Delete poll");
}

module.exports.getSpecificPoll = function(req, res){
    res.send("Get specific poll");
}

module.exports.castVote = function(req, res){
    res.send("Vote for a specific poll");
}
