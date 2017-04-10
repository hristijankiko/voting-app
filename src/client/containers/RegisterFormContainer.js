import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import {attemptRegister} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: ({username, password}) => {
            dispatch(attemptRegister(username, password))
        }
    }
}

const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default RegisterFormContainer;