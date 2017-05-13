import {connect} from 'react-redux';
import PollInfo from '../components/PollInfo';
import {attemptVote} from '../actions';

const mapStateToProps = (state, ownProps) => {
    var poll;

    for(var i = 0; i < state.polls.items.length; i++) {
        if(state.polls.items[i]._id == ownProps.match.params.pollid) {
            poll = state.polls.items[i];
            break;
        }
    }

    if(!poll) {
        return {};
    }
    return {
        _id: poll._id,
        name: poll.name,
        choices: poll.choices,
        usersVoted: poll.usersVoted,
        authUser: state.auth.username,
    }
}

const PollInfoContainer = connect(
    mapStateToProps
)(PollInfo);

export default PollInfoContainer;