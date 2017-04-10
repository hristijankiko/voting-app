'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECIEVE_REGISTER = exports.REQUEST_REGISTER = exports.RECIEVE_LOGIN = exports.REQUEST_LOGIN = exports.RECIEVE_POLLS = exports.REQUEST_POLLS = exports.INVALIDATE_POLLS = exports.FETCH_POLLS = undefined;
exports.fetchPolls = fetchPolls;
exports.attemptLogin = attemptLogin;
exports.attemptRegister = attemptRegister;
exports.invalidatePolls = invalidatePolls;
exports.requestPolls = requestPolls;
exports.recievePolls = recievePolls;
exports.requestLogin = requestLogin;
exports.recieveLogin = recieveLogin;
exports.requestRegister = requestRegister;
exports.recieveRegister = recieveRegister;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_POLLS = exports.FETCH_POLLS = 'FETCH_POLLS'; // Actions
var INVALIDATE_POLLS = exports.INVALIDATE_POLLS = 'INVALIDATE_POLLS';
var REQUEST_POLLS = exports.REQUEST_POLLS = 'REQUEST_POLLS';
var RECIEVE_POLLS = exports.RECIEVE_POLLS = 'RECIEVE_POLLS';
var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECIEVE_LOGIN = exports.RECIEVE_LOGIN = 'RECIEVE_LOGIN';
var REQUEST_REGISTER = exports.REQUEST_REGISTER = 'REQUEST_REGISTER';
var RECIEVE_REGISTER = exports.RECIEVE_REGISTER = 'RECIEVE_REGISTER';

function fetchPolls() {
    return function (dispatch) {
        dispatch(requestPolls());
        return (0, _isomorphicFetch2.default)('http://localhost:3000/api/polls').then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(recievePolls(json));
        });
    };
}

function attemptLogin(username, password) {
    console.log("Username: " + username + " Password: " + password);
    return function (dispatch) {
        dispatch(requestLogin());
        return (0, _isomorphicFetch2.default)('http://localhost:3000/', { method: 'POST' }).then(function (response) {
            return response.json;
        }).then(function (json) {
            return dispatch(recieveLogin(json));
        });
    };
}

function attemptRegister(username, password) {
    console.log("Username: " + username + " Password: " + password);
    return function (dispatch) {
        dispatch(requestRegister());
        return (0, _isomorphicFetch2.default)('http://localhost:3000/register', { method: 'POST' }).then(function (response) {
            return response.json;
        }).then(function (json) {
            return dispatch(recieveRegister(json));
        });
    };
}

function invalidatePolls() {
    return {
        type: INVALIDATE_POLLS
    };
}

function requestPolls() {
    return {
        type: REQUEST_POLLS
    };
}

function recievePolls(json) {
    return {
        type: RECIEVE_POLLS,
        results: json
    };
}

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}

function recieveLogin(json) {
    return {
        type: RECIEVE_LOGIN,
        loginData: json
    };
}

function requestRegister() {
    return {
        type: REQUEST_REGISTER
    };
}

function recieveRegister(json) {
    return {
        type: RECIEVE_REGISTER,
        registerData: json
    };
}