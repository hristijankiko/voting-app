import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {attemptLogin} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: ({username, password}) => {
            dispatch(attemptLogin(username, password))
        }
    }
}

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default LoginFormContainer;