import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
    FETCH_POLLS,
    INVALIDATE_POLLS,
    REQUEST_POLLS,
    RECIEVE_POLLS,
    REQUEST_POLL_CREATE,
    RECIEVE_POLL_CREATE_SUCESS,
    RECIEVE_POLL_CREATE_FAIL,
    REQUEST_LOGIN,
    RECIEVE_LOGIN_SUCESS,
    RECIEVE_LOGIN_FAIL,
    REQUEST_REGISTER,
    RECIEVE_REGISTER_SUCESS,
    RECIEVE_REGISTER_FAIL,
    REQUEST_VOTE,
    RECIEVE_VOTE,
    REQUEST_LOGOUT,
    RECIEVE_LOGOUT,
    ADD_ERROR,
    DELETE_ERROR
} from '../actions';
let errId = 0;

function authReducer(state = {}, action) {
    switch(action.type) {
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECIEVE_LOGIN_SUCESS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            })
        case RECIEVE_LOGIN_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                isAuthenticated: false
            })
        case REQUEST_REGISTER:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECIEVE_REGISTER_SUCESS:
            return Object.assign({}, state, {
                isFetching: false,
                username: action.username,
                isAuthenticated: action.isAuthenticated
            });
        case RECIEVE_REGISTER_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                username: null,
                isAuthenticated: false
            })
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
        case RECIEVE_POLL_CREATE_SUCESS:
            return Object.assign({}, state, {
                isFetching: false,
            })
        case RECIEVE_POLL_CREATE_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
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

function errorReducer(state = {}, action) {
    switch(action.type) {
        case ADD_ERROR:
            return {
                message: action.message
            }
        case DELETE_ERROR:
            return {

            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer,
    polls: pollsReducer,
    form: formReducer,
    error: errorReducer
});

export default rootReducer;