"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var _ref$text = _ref.text,
        text = _ref$text === undefined ? "Button" : _ref$text,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? "button" : _ref$type,
        _ref$disabled = _ref.disabled,
        disabled = _ref$disabled === undefined ? false : _ref$disabled;
    return _react2.default.createElement(
        "button",
        { type: type, disabled: disabled },
        text
    );
};

exports.default = Button;