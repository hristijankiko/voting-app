"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function RadioButton(_ref) {
    var _id = _ref._id,
        name = _ref.name,
        pollId = _ref.pollId,
        label = _ref.label,
        input = _ref.input;

    return _react2.default.createElement(
        "div",
        { className: "radioButton" },
        _react2.default.createElement("input", _extends({}, input, { id: _id, name: pollId, type: "radio", value: label })),
        _react2.default.createElement(
            "label",
            { htmlFor: _id },
            _react2.default.createElement(
                "span",
                null,
                label
            )
        )
    );
};

exports.default = RadioButton;