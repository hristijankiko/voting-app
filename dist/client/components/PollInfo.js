'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _DoughnutChart = require('./DoughnutChart');

var _DoughnutChart2 = _interopRequireDefault(_DoughnutChart);

var _VoteFormContainer = require('../containers/VoteFormContainer');

var _VoteFormContainer2 = _interopRequireDefault(_VoteFormContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PollInfo = function PollInfo(_ref) {
    var _id = _ref._id,
        name = _ref.name,
        _ref$choices = _ref.choices,
        choices = _ref$choices === undefined ? [] : _ref$choices,
        authUser = _ref.authUser;
    return _react2.default.createElement(
        'div',
        null,
        !_id && _react2.default.createElement(_reactRouter.Redirect, { to: '/' }),
        _react2.default.createElement(
            'h1',
            { className: 'pollHeader' },
            name
        ),
        _react2.default.createElement(
            'div',
            { className: 'pollInfoContent' },
            _react2.default.createElement(_VoteFormContainer2.default, _defineProperty({ choices: choices, authUser: authUser, pollId: _id }, 'authUser', authUser)),
            _react2.default.createElement(_DoughnutChart2.default, { _id: _id, choices: choices, width: '300', height: '300' })
        )
    );
};

exports.default = PollInfo;