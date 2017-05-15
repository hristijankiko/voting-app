"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderField = function RenderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      placeholder = _ref.placeholder,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    "div",
    { className: "inputField" },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("input", _extends({}, input, { type: type, placeholder: placeholder || label })),
      touched && error && _react2.default.createElement(
        "span",
        { className: "formError" },
        error
      )
    )
  );
};

exports.default = RenderField;