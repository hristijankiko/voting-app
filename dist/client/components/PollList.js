'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Poll = require('./Poll');

var _Poll2 = _interopRequireDefault(_Poll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserPolls(polls, createdBy) {
  console.log(createdBy);
  if (!createdBy) {
    return polls;
  }

  polls = polls.filter(function (poll) {
    console.log(poll.createdBy);
    return poll.createdBy == createdBy;
  });

  console.log(polls);

  return polls;
}

var PollList = function PollList(_ref) {
  var _ref$polls = _ref.polls,
      polls = _ref$polls === undefined ? [] : _ref$polls,
      createdBy = _ref.createdBy;
  return _react2.default.createElement(
    'div',
    { className: 'pollListContainer' },
    getUserPolls(polls, createdBy).map(function (poll, index) {
      return _react2.default.createElement(_Poll2.default, { key: poll._id, name: poll.name, _id: poll._id, choices: poll.choices });
    })
  );
};

exports.default = PollList;