import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import {attemptRegister} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(attemptRegister(data))
        }
    }
}

const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default RegisterFormContainer;