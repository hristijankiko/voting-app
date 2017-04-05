import {connect} from 'react-redux';
import PollInfo from '../components/PollInfo';

const mapStateToProps = (state, ownProps) => {
    var poll;

    for(var i = 0; i < state.polls.items.length; i++) {
        if(state.polls.items[i]._id == ownProps.match.params.pollid) {
            poll = state.polls.items[i];
            break;
        }
    }

    console.log("Poll selected: " + ownProps.match.params.pollid);
    if(!poll) {
        return {};
    }
    return {
        id: poll._id,
        name: poll.name,
        choices: poll.choices,
    }
}

const PollInfoContainer = connect(
    mapStateToProps
)(PollInfo);

export default PollInfoContainer;