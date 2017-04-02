"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
  return _react2.default.createElement(
    "nav",
    { className: "navbar navbar-default" },
    _react2.default.createElement(
      "div",
      { className: "container-fluid" },
      _react2.default.createElement(
        "div",
        { className: "navbar-header" },
        _react2.default.createElement(
          "button",
          { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
          _react2.default.createElement(
            "span",
            { className: "sr-only" },
            "Toggle navigation"
          ),
          _react2.default.createElement("span", { className: "icon-bar" }),
          _react2.default.createElement("span", { className: "icon-bar" }),
          _react2.default.createElement("span", { className: "icon-bar" })
        ),
        _react2.default.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          "Voting app"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
        _react2.default.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" },
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Home"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Log in"
            )
          )
        )
      )
    )
  );
};

exports.default = Navigation;