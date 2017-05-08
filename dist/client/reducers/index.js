'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _actions = require('../actions');

function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _actions.REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case _actions.RECIEVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            });
        case _actions.REQUEST_REGISTER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case _actions.RECIEVE_REGISTER:
            return Object.assign({}, state, {
                isFetching: false,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            });
        case _actions.REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isFetching: true
            });
        case _actions.RECIEVE_LOGOUT:
            return Object.assign({}, state, {
                username: null,
                isAuthenticated: false,
                isFetching: false
            });
        default:
            return state;
    }
}

function pollsReducer() {
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
        case _actions.REQUEST_POLL_CREATE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case _actions.RECIEVE_POLL_CREATE:
            return Object.assign({}, state, {
                isFetching: false,
                success: action.success
            });
        case _actions.REQUEST_VOTE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case _actions.RECIEVE_VOTE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}

var rootReducer = (0, _redux.combineReducers)({
    auth: authReducer,
    polls: pollsReducer,
    form: _reduxForm.reducer
});

exports.default = rootReducer;