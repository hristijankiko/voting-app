'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Poll = function Poll(_ref) {
    var name = _ref.name,
        _id = _ref._id,
        _ref$choices = _ref.choices,
        choices = _ref$choices === undefined ? [] : _ref$choices;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _id, className: 'pollLink' },
        _react2.default.createElement(
            'div',
            { className: 'pollBox' },
            _react2.default.createElement(
                'h3',
                { className: 'pollName' },
                name
            ),
            _react2.default.createElement(
                'ul',
                { className: 'pollChoices' },
                choices.sort(function (a, b) {
                    return a.votes - b.votes;
                }).reverse().slice(0, 3).map(function (choice) {
                    return _react2.default.createElement(
                        'li',
                        { key: choice._id },
                        _react2.default.createElement(
                            'span',
                            { className: 'voteNumber' },
                            choice.votes
                        ),
                        choice.name
                    );
                })
            )
        )
    );
};

exports.default = Poll;