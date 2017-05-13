import {connect} from 'react-redux';
import {attemptVote} from '../actions';
import VoteForm from '../components/VoteForm';

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.polls.isFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onVoteSubmit: ({voteChoice}) => {
            dispatch(attemptVote(ownProps.pollId, voteChoice, ownProps.authUser));
        }
    }
}

const VoteFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteForm);

export default VoteFormContainer;