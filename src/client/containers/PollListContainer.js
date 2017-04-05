import {connect} from 'react-redux';
import PollsList from '../components/PollList';

const mapStateToProps = (state, ownProps) => {
    return {
        polls: state.polls.items
    }
}

const PollsContainer = connect(
    mapStateToProps
)(PollsList)

export default PollsContainer;