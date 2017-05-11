'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECIEVE_LOGOUT = exports.REQUEST_LOGOUT = exports.RECIEVE_VOTE = exports.REQUEST_VOTE = exports.RECIEVE_REGISTER = exports.REQUEST_REGISTER = exports.RECIEVE_LOGIN = exports.REQUEST_LOGIN = exports.RECIEVE_POLL_CREATE = exports.REQUEST_POLL_CREATE = exports.RECIEVE_POLLS = exports.REQUEST_POLLS = exports.INVALIDATE_POLLS = exports.FETCH_POLLS = undefined;
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
exports.recievePollCreate = recievePollCreate;
exports.requestLogin = requestLogin;
exports.recieveLogin = recieveLogin;
exports.requestRegister = requestRegister;
exports.recieveRegister = recieveRegister;
exports.requestLogout = requestLogout;
exports.recieveLogout = recieveLogout;
exports.requestVote = requestVote;
exports.recieveVote = recieveVote;

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
var RECIEVE_POLL_CREATE = exports.RECIEVE_POLL_CREATE = 'RECIEVE_POLL_CREATE';
var REQUEST_LOGIN = exports.REQUEST_LOGIN = 'REQUEST_LOGIN';
var RECIEVE_LOGIN = exports.RECIEVE_LOGIN = 'RECIEVE_LOGIN';
var REQUEST_REGISTER = exports.REQUEST_REGISTER = 'REQUEST_REGISTER';
var RECIEVE_REGISTER = exports.RECIEVE_REGISTER = 'RECIEVE_REGISTER';
var REQUEST_VOTE = exports.REQUEST_VOTE = 'REQUEST_VOTE';
var RECIEVE_VOTE = exports.RECIEVE_VOTE = 'RECIEVE_VOTE';
var REQUEST_LOGOUT = exports.REQUEST_LOGOUT = 'REQUEST_LOGOUT';
var RECIEVE_LOGOUT = exports.RECIEVE_LOGOUT = 'RECIEVE_LOGOUT';

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
            return response.json();
        }).then(function (json) {
            return dispatch(recieveLogin(json));
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
            if (response.status === 200) {
                console.log(response);
                return response.json();
            } else {
                console.log("Error, user not created");
            }
        }).then(function (json) {
            console.log(json);
            dispatch(recieveRegister(json));
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
    console.log(formBody);

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
            dispatch(recievePollCreate(json));
            dispatch(fetchPolls());
            _history2.default.push('/login');
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

function recievePollCreate(poll) {
    var success = true;
    if (!poll.choices) {
        success = false;
    }
    return {
        type: RECIEVE_POLL_CREATE,
        success: success
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
        username: json.username,
        isAuthenticated: true
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
        username: json.username,
        isAuthenticated: true
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