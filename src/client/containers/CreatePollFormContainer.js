import {connect} from 'react-redux';
import CreatePollForm from '../components/CreatePollForm';
import * as actionCreators from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(attemptPollCreate(data));
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        isAuthenticated: stateProps.isAuthenticated,
        onSubmit: (data) => dispatchProps.attemptPollCreate(data, stateProps.username)
    })
}

const CreatePollFormContainer = connect(
    mapStateToProps,
    actionCreators,
    mergeProps
)(CreatePollForm);

export default CreatePollFormContainer;