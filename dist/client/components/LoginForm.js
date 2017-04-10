'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
        var handleSubmit = _ref.handleSubmit,
            onSubmit = _ref.onSubmit,
            _ref$errors = _ref.errors,
            errors = _ref$errors === undefined ? {} : _ref$errors;
        return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit(onSubmit) },
                _react2.default.createElement(
                        'h2',
                        null,
                        'Login'
                ),
                errors.summary && _react2.default.createElement(
                        'p',
                        { className: 'error-message' },
                        errors.summary
                ),
                _react2.default.createElement(
                        'label',
                        { htmlFor: 'username' },
                        'Username:'
                ),
                _react2.default.createElement(_reduxForm.Field, { name: 'username', component: 'input', type: 'text' }),
                _react2.default.createElement(
                        'label',
                        { htmlFor: 'password' },
                        'Password:'
                ),
                _react2.default.createElement(_reduxForm.Field, { name: 'password', component: 'input', type: 'password' }),
                _react2.default.createElement(_Button2.default, { type: 'submit', text: 'Login' })
        );
};

LoginForm = (0, _reduxForm.reduxForm)({
        form: 'login'
})(LoginForm);

exports.default = LoginForm;