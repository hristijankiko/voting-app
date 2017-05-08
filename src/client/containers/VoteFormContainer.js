import {connect} from 'react-redux';
import {attemptVote} from '../actions';
import VoteForm from '../components/VoteForm';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onVoteSubmit: ({voteChoice}) => {
            dispatch(attemptVote(ownProps.pollId, voteChoice, ownProps.authUser));
        }
    }
}

const VoteFormContainer = connect(
    null,
    mapDispatchToProps
)(VoteForm);

export default VoteFormContainer;