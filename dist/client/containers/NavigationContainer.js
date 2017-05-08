'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _Navigation = require('../components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        username: state.auth.username
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onLogoutClick: function onLogoutClick() {
            dispatch((0, _actions.attemptLogout)());
        }
    };
};

var NavigationContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navigation2.default);

exports.default = NavigationContainer;