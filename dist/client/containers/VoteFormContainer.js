'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _VoteForm = require('../components/VoteForm');

var _VoteForm2 = _interopRequireDefault(_VoteForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        isFetching: state.polls.isFetching
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onVoteSubmit: function onVoteSubmit(_ref) {
            var voteChoice = _ref.voteChoice;

            dispatch((0, _actions.attemptVote)(ownProps.pollId, voteChoice, ownProps.authUser));
        }
    };
};

var VoteFormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_VoteForm2.default);

exports.default = VoteFormContainer;