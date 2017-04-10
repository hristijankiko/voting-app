import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
    FETCH_POLLS,
    INVALIDATE_POLLS,
    REQUEST_POLLS,
    RECIEVE_POLLS,
    REQUEST_LOGIN,
    RECIEVE_LOGIN,
    REQUEST_REGISTER,
    RECIEVE_REGISTER
} from '../actions';

function authReducer(state = {}, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECIEVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                authData: action.authData
            })
        case REQUEST_REGISTER:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECIEVE_REGISTER:
            return Object.assign({}, state, {
                isFetching: false,
                registerData: action.registerData
            });
        default:
            return state;
    }
}

function pollsReducer(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch(action.type) {
        case INVALIDATE_POLLS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POLLS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECIEVE_POLLS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.results,
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
    polls: pollsReducer,
    form: formReducer
});

export default rootReducer;