"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
    var message = _ref.message,
        onClose = _ref.onClose;
    return _react2.default.createElement(
        "div",
        { className: "errorMessage" },
        _react2.default.createElement(
            "h3",
            null,
            message
        ),
        _react2.default.createElement(
            "button",
            { type: "button", onClick: onClose },
            "\xD7"
        )
    );
};

exports.default = ErrorMessage;