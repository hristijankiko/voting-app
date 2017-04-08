'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _RegisterForm = require('../components/RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        user: state.registerForm.user,
        errors: state.registerForm.errors
    };
};

var mapDispatchToProps = function mapDispatchToProps() {
    return {};
};

var RegisterFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RegisterForm2.default);

exports.default = RegisterFormContainer;