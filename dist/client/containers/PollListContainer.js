'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _PollList = require('../components/PollList');

var _PollList2 = _interopRequireDefault(_PollList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        polls: state.polls.items
    };
};

var PollsContainer = (0, _reactRedux.connect)(mapStateToProps)(_PollList2.default);

exports.default = PollsContainer;