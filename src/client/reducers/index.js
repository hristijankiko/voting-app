import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {
    FETCH_POLLS,
    INVALIDATE_POLLS,
    REQUEST_POLLS,
    RECIEVE_POLLS
} from '../actions';

function polls(state = {
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
    polls,
    form: formReducer
});

export default rootReducer;