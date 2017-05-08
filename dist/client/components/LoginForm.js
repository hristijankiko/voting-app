'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reduxForm = require('redux-form');

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _RenderField = require('./RenderField');

var _RenderField2 = _interopRequireDefault(_RenderField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(values) {
    var errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!(0, _isEmail2.default)(values.email)) {
        errors.email = "Invalid email";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

var LoginForm = function LoginForm(_ref) {
    var handleSubmit = _ref.handleSubmit,
        onSubmit = _ref.onSubmit,
        _ref$errors = _ref.errors,
        errors = _ref$errors === undefined ? {} : _ref$errors,
        submitting = _ref.submitting,
        isAuthenticated = _ref.isAuthenticated;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit(onSubmit) },
        isAuthenticated && _react2.default.createElement(_reactRouter.Redirect, { to: '/' }),
        _react2.default.createElement(
            'h2',
            null,
            'Login'
        ),
        _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _RenderField2.default, type: 'email', label: 'Email' }),
        _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _RenderField2.default, type: 'password', label: 'Password' }),
        _react2.default.createElement(_Button2.default, { type: 'Submit', text: 'Login', disabled: submitting })
    );
};

LoginForm = (0, _reduxForm.reduxForm)({
    form: 'login',
    validate: validate
})(LoginForm);

exports.default = LoginForm;