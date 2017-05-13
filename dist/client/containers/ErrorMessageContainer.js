'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _ErrorMessage = require('../components/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        message: ownProps.message
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClose: function onClose() {
            dispatch((0, _actions.deleteError)());
        }
    };
};

var ErrorMessageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ErrorMessage2.default);

exports.default = ErrorMessageContainer;