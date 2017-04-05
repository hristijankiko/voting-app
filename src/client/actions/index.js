// Actions
import fetch from 'isomorphic-fetch';

export const FETCH_POLLS = 'FETCH_POLLS';
export const INVALIDATE_POLLS = 'INVALIDATE_POLLS';
export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECIEVE_POLLS = 'RECIEVE_POLLS';


export function fetchPolls(polls) {
    return function (dispatch) {
        dispatch(requestPolls(polls))
        return fetch('http://localhost:3000/api/polls')
        .then(response => response.json())
        .then(json => 
            dispatch(recievePolls(polls, json))
        );
    }
}

export function invalidatePolls(polls) {
    return {
        type: INVALIDATE_POLLS,
        polls
    }
}

export function requestPolls(polls) {
    return {
        type: REQUEST_POLLS,
        polls
    }
}

export function recievePolls(polls, json) {
    return {
        type: RECIEVE_POLLS,
        results: json
    }
} 