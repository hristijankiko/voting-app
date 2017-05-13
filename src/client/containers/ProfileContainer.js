import {connect} from 'react-redux';
import Profile from '../components/Profile';

function mapStateToProps(state, ownProps) {
    return {
        createdBy: state.auth.username,
        polls: state.polls.items,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const ProfileContainer = connect(
    mapStateToProps
)(Profile);

export default ProfileContainer;