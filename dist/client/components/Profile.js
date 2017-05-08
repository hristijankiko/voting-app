'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PollList = require('../components/PollList');

var _PollList2 = _interopRequireDefault(_PollList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function Profile(_ref) {
    var createdBy = _ref.createdBy,
        polls = _ref.polls;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' Polls created by you'
        ),
        _react2.default.createElement(_PollList2.default, { polls: polls, createdBy: createdBy })
    );
};

exports.default = Profile;