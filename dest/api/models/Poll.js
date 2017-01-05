'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Poll choices Schema
var choiceSchema = new _mongoose2.default.Schema({
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
var pollSchema = new _mongoose2.default.Schema({
    name: {
        type: String,
        required: true
    },
    choices: {
        type: [choiceSchema],
        required: true
    }
});

_mongoose2.default.model('Poll', pollSchema);