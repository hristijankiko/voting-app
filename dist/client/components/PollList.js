"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PollList = function PollList() {
  return _react2.default.createElement(
    "ul",
    { className: "list-group" },
    _react2.default.createElement(
      "li",
      { className: "list-group-item col-md-4" },
      "Cras justo odio"
    ),
    _react2.default.createElement(
      "li",
      { className: "list-group-item col-md-4" },
      "Dapibus ac facilisis in"
    ),
    _react2.default.createElement(
      "li",
      { className: "list-group-item col-md-4" },
      "Morbi leo risus"
    ),
    _react2.default.createElement(
      "li",
      { className: "list-group-item col-md-4" },
      "Porta ac consectetur ac"
    ),
    _react2.default.createElement(
      "li",
      { className: "list-group-item col-md-4" },
      "Vestibulum at eros"
    )
  );
};

exports.default = PollList;