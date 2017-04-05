'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _PollInfo = require('../components/PollInfo');

var _PollInfo2 = _interopRequireDefault(_PollInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    var poll;

    for (var i = 0; i < state.polls.items.length; i++) {
        if (state.polls.items[i]._id == ownProps.match.params.pollid) {
            poll = state.polls.items[i];
            break;
        }
    }

    console.log("Poll selected: " + ownProps.match.params.pollid);
    if (!poll) {
        return {};
    }
    return {
        id: poll._id,
        name: poll.name,
        choices: poll.choices
    };
};

var PollInfoContainer = (0, _reactRedux.connect)(mapStateToProps)(_PollInfo2.default);

exports.default = PollInfoContainer;