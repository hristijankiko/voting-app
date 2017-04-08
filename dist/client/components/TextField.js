'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function TextField(_ref) {
    var type = _ref.type,
        name = _ref.name,
        value = _ref.value,
        onChange = _ref.onChange,
        label = _ref.label;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            { htmlFor: name },
            label
        ),
        _react2.default.createElement('input', { type: type, id: name, name: name, value: value, onChange: onChange })
    );
};

exports.default = TextField;