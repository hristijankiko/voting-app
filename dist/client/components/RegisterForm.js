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

var _RenderField = require('./RenderField');

var _RenderField2 = _interopRequireDefault(_RenderField);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ErrorMessageContainer = require('../containers/ErrorMessageContainer');

var _ErrorMessageContainer2 = _interopRequireDefault(_ErrorMessageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(values) {
    var errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!(0, _isEmail2.default)(values.email)) {
        errors.email = "Invalid email";
    }

    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.length < 6) {
        errors.username = "Username must be at least 5 characters";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    return errors;
};

var RegisterForm = function RegisterForm(_ref) {
    var handleSubmit = _ref.handleSubmit,
        onSubmit = _ref.onSubmit,
        _ref$err = _ref.err,
        err = _ref$err === undefined ? {} : _ref$err,
        _ref$isFetching = _ref.isFetching,
        isFetching = _ref$isFetching === undefined ? false : _ref$isFetching,
        isAuthenticated = _ref.isAuthenticated;
    return _react2.default.createElement(
        'div',
        null,
        isAuthenticated && _react2.default.createElement(_reactRouter.Redirect, { to: '/' }),
        err.message && _react2.default.createElement(_ErrorMessageContainer2.default, { message: err.message }),
        _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit(onSubmit) },
            _react2.default.createElement(
                'h2',
                null,
                'Register'
            ),
            _react2.default.createElement(_reduxForm.Field, { name: 'username', component: _RenderField2.default, type: 'text', label: 'Username' }),
            _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _RenderField2.default, type: 'email', label: 'Email' }),
            _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _RenderField2.default, type: 'password', label: 'Password' }),
            _react2.default.createElement(_Button2.default, { type: 'Submit', text: 'Register', disabled: isFetching })
        )
    );
};

RegisterForm = (0, _reduxForm.reduxForm)({
    form: 'register',
    validate: validate
})(RegisterForm);

exports.default = RegisterForm;