'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _Profile = require('../components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state, ownProps) {
    return {
        createdBy: state.auth.username,
        polls: state.polls.items,
        isAuthenticated: state.auth.isAuthenticated
    };
}

var ProfileContainer = (0, _reactRedux.connect)(mapStateToProps)(_Profile2.default);

exports.default = ProfileContainer;