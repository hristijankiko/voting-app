import {connect} from 'react-redux';
import {deleteError} from '../actions';
import ErrorMessage from '../components/ErrorMessage';

const mapStateToProps = (state, ownProps) => {
    return {
        message: ownProps.message
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClose: () => {
            dispatch(deleteError());
        }
    }
}

const ErrorMessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorMessage);

export default ErrorMessageContainer;