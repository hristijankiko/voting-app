'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _CreatePollForm = require('../components/CreatePollForm');

var _CreatePollForm2 = _interopRequireDefault(_CreatePollForm);

var _actions = require('../actions');

var actionCreators = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        username: state.auth.username,
        isAuthenticated: state.auth.isAuthenticated
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onSubmit: function onSubmit(data) {
            dispatch(attemptPollCreate(data));
        }
    };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
    return Object.assign({}, ownProps, {
        isAuthenticated: stateProps.isAuthenticated,
        onSubmit: function onSubmit(data) {
            return dispatchProps.attemptPollCreate(data, stateProps.username);
        }
    });
};

var CreatePollFormContainer = (0, _reactRedux.connect)(mapStateToProps, actionCreators, mergeProps)(_CreatePollForm2.default);

exports.default = CreatePollFormContainer;