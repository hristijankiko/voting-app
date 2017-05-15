'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reduxForm = require('redux-form');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _RenderField = require('./RenderField');

var _RenderField2 = _interopRequireDefault(_RenderField);

var _ErrorMessageContainer = require('../containers/ErrorMessageContainer');

var _ErrorMessageContainer2 = _interopRequireDefault(_ErrorMessageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(values) {
    var errors = {};

    if (!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 6) {
        errors.name = "Name must be at least 6 characters";
    }

    if (!values.choices) {
        errors.choices = "Choices are required";
    } else if (values.choices.length < 6) {
        errors.choices = "Choice must be at least 6 characters";
    }

    return errors;
};

var CreatePollForm = function CreatePollForm(_ref) {
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
        !isAuthenticated && _react2.default.createElement(_reactRouter.Redirect, { to: '/login' }),
        err.message && _react2.default.createElement(_ErrorMessageContainer2.default, { message: err.message }),
        _react2.default.createElement(
            'form',
            { onSubmit: handleSubmit(onSubmit) },
            _react2.default.createElement(
                'h2',
                null,
                'Create Poll'
            ),
            _react2.default.createElement(_reduxForm.Field, { name: 'name', component: _RenderField2.default, type: 'name', label: 'Name' }),
            _react2.default.createElement(_reduxForm.Field, { name: 'choices', component: _RenderField2.default, type: 'choices', label: 'Choices', placeholder: 'Choice1, Choice2, Choice3...' }),
            _react2.default.createElement(_Button2.default, { type: 'Submit', text: 'Create', disabled: isFetching })
        )
    );
};

CreatePollForm = (0, _reduxForm.reduxForm)({
    form: 'createPoll',
    validate: validate
})(CreatePollForm);

exports.default = CreatePollForm;