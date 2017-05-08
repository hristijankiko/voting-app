import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
    FETCH_POLLS,
    INVALIDATE_POLLS,
    REQUEST_POLLS,
    RECIEVE_POLLS,
    REQUEST_POLL_CREATE,
    RECIEVE_POLL_CREATE,
    REQUEST_LOGIN,
    RECIEVE_LOGIN,
    REQUEST_REGISTER,
    RECIEVE_REGISTER,
    REQUEST_VOTE,
    RECIEVE_VOTE,
    REQUEST_LOGOUT,
    RECIEVE_LOGOUT
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
                username: action.username,
                isAuthenticated: action.isAuthenticated
            })
        case REQUEST_REGISTER:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECIEVE_REGISTER:
            return Object.assign({}, state, {
                isFetching: false,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            });
        case REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECIEVE_LOGOUT:
            return Object.assign({}, state, {
                username: null,
                isAuthenticated: false,
                isFetching: false
            })
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
        case REQUEST_POLL_CREATE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECIEVE_POLL_CREATE:
            return Object.assign({}, state, {
                isFetching: false,
                success: action.success
            })
        case REQUEST_VOTE:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECIEVE_VOTE:
            return Object.assign({}, state, {
                isFetching: false,
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