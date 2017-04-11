'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _RegisterForm = require('../components/RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onSubmit: function onSubmit(data) {
            dispatch((0, _actions.attemptRegister)(data));
        }
    };
};

var RegisterFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RegisterForm2.default);

exports.default = RegisterFormContainer;