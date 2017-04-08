import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.registerForm.user,
        errors: state.registerForm.errors
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

export default RegisterFormContainer;