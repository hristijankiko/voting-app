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
        _id = _ref._id;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _id },
        _react2.default.createElement(
            'li',
            { className: 'list-group-item col-md-4' },
            name
        )
    );
};

exports.default = Poll;