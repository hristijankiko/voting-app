'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DELETE_ERROR = exports.ADD_ERROR = exports.RECIEVE_LOGOUT = exports.REQUEST_LOGOUT = exports.RECIEVE_VOTE = exports.REQUEST_VOTE = exports.RECIEVE_REGISTER_FAIL = exports.RECIEVE_REGISTER_SUCESS = exports.REQUEST_REGISTER = exports.RECIEVE_LOGIN_FAIL = exports.RECIEVE_LOGIN_SUCESS = exports.REQUEST_LOGIN = exports.RECIEVE_POLL_CREATE_FAIL = exports.RECIEVE_POLL_CREATE_SUCESS = exports.REQUEST_POLL_CREATE = exports.RECIEVE_POLLS = exports.REQUEST_POLLS = exports.INVALIDATE_POLLS = exports.FETCH_POLLS = undefined;
exports.attemptVote = attemptVote;
exports.fetchPolls = fetchPolls;
exports.attemptLogin = attemptLogin;
exports.attemptRegister = attemptRegister;
exports.attemptLogout = attemptLogout;
exports.attemptPollCreate = attemptPollCreate;
exports.invalidatePolls = invalidatePolls;
exports.requestPolls = requestPolls;
exports.recievePolls = recievePolls;
exports.requestPollCreate = requestPollCreate;
exports.recievePollCreateSucess = recievePollCreateSucess;
exports.recievePollCreateFail = recievePollCreateFail;
exports.requestLogin = requestLogin;
exports.recieveLoginSucess = recieveLoginSucess;
exports.recieveLoginFail = recieveLoginFail;
exports.requestRegister = requestRegister;
exports.recieveRegisterSucess = recieveRegisterSucess;
exports.recieveRegisterFail = recieveRegisterFail;
exports.requestLogout = requestLogout;
exports.recieveLogout = recieveLogout;
exports.requestVote = requestVote;
exports.recieveVote = recieveVote;
exports.addError = addError;
exports.deleteError = deleteError;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _history = require('../history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Actions
var FETCH_POLLS = exports.FETCH_POLLS = 'FETCH_POLLS';
var INVALIDATE_POLLS = exports.INVALIDATE_POLLS = 'INVALIDATE_POLLS';
var REQUEST_POLLS = exports.REQUEST_POLLS = 'REQUEST_POLLS';
var RECIEVE_POLLS = exports.RECIEVE_POLLS = 'RECIEVE_POLLS';
var REQUEST_POLL_CREATE = exports.REQUEST_POLL_CREATE = 'REQUEST_POLL_CREATE';
var RECIEVE_POLL_CREATE_SUCESS = exports.RECIEVE_POLL_CREATE_SUCESS = 'RECIEVE_POLL_CREATE_SUCESS';
var RECIEVE_POLL_CREATE_FAIL = exports.RECIEVE_POLL_CREATE_FAIL = 'RECIEVE_POLL_CREATE_FAIL';
var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECIEVE_LOGIN_SUCESS = exports.RECIEVE_LOGIN_SUCESS = 'RECIEVE_LOGIN_SUCESS';
var RECIEVE_LOGIN_FAIL = exports.RECIEVE_LOGIN_FAIL = 'RECIEVE_LOGIN_FAIL';
var REQUEST_REGISTER = exports.REQUEST_REGISTER = 'REQUEST_REGISTER';
var RECIEVE_REGISTER_SUCESS = exports.RECIEVE_REGISTER_SUCESS = 'RECIEVE_REGISTER_SUCESS';
var RECIEVE_REGISTER_FAIL = exports.RECIEVE_REGISTER_FAIL = 'RECIEVE_REGISTER_FAIL';
var REQUEST_VOTE = exports.REQUEST_VOTE = 'REQUEST_VOTE';
var RECIEVE_VOTE = exports.RECIEVE_VOTE = 'RECIEVE_VOTE';
var REQUEST_LOGOUT = exports.REQUEST_LOGOUT = 'REQUEST_LOGOUT';
var RECIEVE_LOGOUT = exports.RECIEVE_LOGOUT = 'RECIEVE_LOGOUT';
var ADD_ERROR = exports.ADD_ERROR = 'ADD_ERROR';
var DELETE_ERROR = exports.DELETE_ERROR = 'DELETE_ERROR';

var host = "http://localhost:3000";

if (process.env.NODE_ENV === 'production') {
    var protocol = location.protocol;
    var slashes = protocol.concat("//");
    host = slashes.concat(window.location.hostname);
}
function attemptVote(selectedPoll, selectedChoice, username) {
    var formBody = "votedChoice=" + selectedChoice;

    console.log(selectedChoice);

    return function (dispatch) {
        dispatch(requestVote());
        return (0, _isomorphicFetch2.default)(host + '/api/polls/' + selectedPoll, {
            method: 'PUT',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            dispatch(recieveVote());
            if (response.status == 200) {
                dispatch(fetchPolls());
            }
        }).catch(function (err) {
            console.log(err);
            dispatch(recieveVote());
        });
    };
}

function fetchPolls() {
    return function (dispatch) {
        console.log(host + "/api/polls");
        dispatch(requestPolls());
        return (0, _isomorphicFetch2.default)(host + '/api/polls', {
            method: 'GET',
            credentials: 'include'
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(recievePolls(json));
        });
    };
}

function attemptLogin(data) {
    var formBody = [];

    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return function (dispatch) {
        dispatch(requestLogin());
        return (0, _isomorphicFetch2.default)(host + '/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json().catch(function () {
                dispatch(recieveLoginFail());
                dispatch(addError({ message: "Incorrect email or password" }));
            });
        }).then(function (json) {
            if (json) {
                dispatch(recieveLoginSucess(json));
            }
        }).catch(function (response) {
            dispatch(recieveLoginFail());
            dispatch(addError({ message: "Could not log in" }));
        });
    };
}

function attemptRegister(data) {
    var formBody = [];

    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return function (dispatch) {
        dispatch(requestRegister());
        return (0, _isomorphicFetch2.default)(host + '/api/auth/register', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            if (json) {
                if (json.error) {
                    dispatch(recieveRegisterFail());
                    dispatch(addError(json));
                    return;
                }
                console.log(json);
                dispatch(recieveRegisterSucess(json));
            }
        }).catch(function () {
            dispatch(recieveRegisterFail());
            dispatch(addError({ message: "Unable to register" }));
        });
    };
}

function attemptLogout() {
    return function (dispatch) {
        dispatch(requestLogout());
        (0, _isomorphicFetch2.default)(host + "/api/auth/logout", {
            method: 'GET',
            credentials: 'include'
        }).then(function (response) {
            if (response.status === 200) {
                dispatch(recieveLogout());
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
}

function attemptPollCreate(data, username) {
    var formBody = [];

    for (var property in data) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    formBody += "&createdBy=" + username;

    return function (dispatch) {
        dispatch(requestPollCreate());
        return (0, _isomorphicFetch2.default)(host + '/api/polls', {
            credentials: 'include',
            method: 'POST',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            if (json) {
                if (json.error) {
                    dispatch(recievePollCreateFail());
                    dispatch(addError(json));
                    return;
                }
                dispatch(recievePollCreateSucess(json));
                dispatch(fetchPolls());
                _history2.default.push('/');
            }
        }).catch(function () {
            dispatch(recievePollCreateFail());
            dispatch(addError(json));
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

function requestPollCreate() {
    return {
        type: REQUEST_POLL_CREATE
    };
}

function recievePollCreateSucess(poll) {
    return {
        type: RECIEVE_POLL_CREATE_SUCESS
    };
}

function recievePollCreateFail() {
    return {
        type: RECIEVE_POLL_CREATE_FAIL
    };
}

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}

function recieveLoginSucess(json) {
    return {
        type: RECIEVE_LOGIN_SUCESS,
        username: json.username,
        isAuthenticated: true
    };
}

function recieveLoginFail() {
    return {
        type: RECIEVE_LOGIN_FAIL
    };
}

function requestRegister() {
    return {
        type: REQUEST_REGISTER
    };
}

function recieveRegisterSucess(json) {
    return {
        type: RECIEVE_REGISTER_SUCESS,
        username: json.username,
        isAuthenticated: true
    };
}

function recieveRegisterFail() {
    return {
        type: RECIEVE_REGISTER_FAIL
    };
}

function requestLogout() {
    return {
        type: REQUEST_LOGOUT
    };
}

function recieveLogout() {
    return {
        type: RECIEVE_LOGOUT
    };
}

function requestVote() {
    return {
        type: REQUEST_VOTE
    };
}

function recieveVote(json) {
    return {
        type: RECIEVE_VOTE,
        poll: json
    };
}

function addError(json) {
    return {
        type: ADD_ERROR,
        message: json.message
    };
}

function deleteError(index) {
    return {
        type: DELETE_ERROR
    };
}