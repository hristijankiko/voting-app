import {connect} from 'react-redux';
import {attemptLogout} from '../actions';
import Navigation from '../components/Navigation';

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        username: state.auth.username
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogoutClick: () => {
            dispatch(attemptLogout());
        }
    }
}

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);

export default NavigationContainer;