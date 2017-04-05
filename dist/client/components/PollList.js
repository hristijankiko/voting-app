'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Poll = require('./Poll');

var _Poll2 = _interopRequireDefault(_Poll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PollList = function PollList(_ref) {
  var _ref$polls = _ref.polls,
      polls = _ref$polls === undefined ? [] : _ref$polls;
  return _react2.default.createElement(
    'ul',
    { className: 'list-group' },
    polls.map(function (poll, index) {
      return _react2.default.createElement(_Poll2.default, { key: poll._id, name: poll.name, _id: poll._id });
    })
  );
};

exports.default = PollList;