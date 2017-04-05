'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RECIEVE_POLLS = exports.REQUEST_POLLS = exports.INVALIDATE_POLLS = exports.FETCH_POLLS = undefined;
exports.fetchPolls = fetchPolls;
exports.invalidatePolls = invalidatePolls;
exports.requestPolls = requestPolls;
exports.recievePolls = recievePolls;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_POLLS = exports.FETCH_POLLS = 'FETCH_POLLS'; // Actions
var INVALIDATE_POLLS = exports.INVALIDATE_POLLS = 'INVALIDATE_POLLS';
var REQUEST_POLLS = exports.REQUEST_POLLS = 'REQUEST_POLLS';
var RECIEVE_POLLS = exports.RECIEVE_POLLS = 'RECIEVE_POLLS';

function fetchPolls(polls) {
    return function (dispatch) {
        dispatch(requestPolls(polls));
        return (0, _isomorphicFetch2.default)('http://localhost:3000/api/polls').then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(recievePolls(polls, json));
        });
    };
}

function invalidatePolls(polls) {
    return {
        type: INVALIDATE_POLLS,
        polls: polls
    };
}

function requestPolls(polls) {
    return {
        type: REQUEST_POLLS,
        polls: polls
    };
}

function recievePolls(polls, json) {
    return {
        type: RECIEVE_POLLS,
        results: json
    };
}