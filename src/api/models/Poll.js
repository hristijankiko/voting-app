import mongoose from 'mongoose';

// Poll choices Schema
let choiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    }
});

//Poll Schema
let pollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    choices: {
        type: [choiceSchema],
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    usersVoted: []
});

mongoose.model('Poll', pollSchema);