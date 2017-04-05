'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _actions = require('../actions');

//Reducers
function polls() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetching: false,
        didInvalidate: false,
        items: []
    };
    var action = arguments[1];

    switch (action.type) {
        case _actions.INVALIDATE_POLLS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case _actions.REQUEST_POLLS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case _actions.RECIEVE_POLLS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.results
            });
        default:
            return state;
    }
}

var rootReducer = (0, _redux.combineReducers)({
    polls: polls
});

exports.default = rootReducer;