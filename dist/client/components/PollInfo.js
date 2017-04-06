'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DoughnutChart = require('./DoughnutChart');

var _DoughnutChart2 = _interopRequireDefault(_DoughnutChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PollInfo = function PollInfo(_ref) {
    var _id = _ref._id,
        name = _ref.name,
        _ref$choices = _ref.choices,
        choices = _ref$choices === undefined ? [] : _ref$choices;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            name
        ),
        _react2.default.createElement(
            'ul',
            null,
            choices.map(function (choice) {
                return _react2.default.createElement(
                    'li',
                    { key: choice._id },
                    choice.name,
                    ': ',
                    choice.votes
                );
            })
        ),
        _react2.default.createElement(_DoughnutChart2.default, { _id: _id, choices: choices, width: '300', height: '300' })
    );
};

exports.default = PollInfo;