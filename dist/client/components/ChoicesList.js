"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChoiceList = function ChoiceList(_ref) {
    var _ref$choices = _ref.choices,
        choices = _ref$choices === undefined ? [] : _ref$choices;
    return _react2.default.createElement(
        "ul",
        { className: "pollChoices" },
        choices.map(function (choice) {
            return _react2.default.createElement(
                "li",
                { key: choice._id },
                _react2.default.createElement(
                    "span",
                    { className: "voteNumber" },
                    choice.votes
                ),
                choice.name
            );
        })
    );
};

exports.default = ChoiceList;