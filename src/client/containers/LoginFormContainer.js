import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {attemptLogin} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        err: state.error,
        isFetching: state.auth.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(attemptLogin(data))
        }
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;