// Actions
import fetch from 'isomorphic-fetch';
import history from '../history';

export const FETCH_POLLS = 'FETCH_POLLS';
export const INVALIDATE_POLLS = 'INVALIDATE_POLLS';
export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECIEVE_POLLS = 'RECIEVE_POLLS';
export const REQUEST_POLL_CREATE = 'REQUEST_POLL_CREATE';
export const RECIEVE_POLL_CREATE_SUCESS = 'RECIEVE_POLL_CREATE_SUCESS';
export const RECIEVE_POLL_CREATE_FAIL = 'RECIEVE_POLL_CREATE_FAIL';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN_SUCESS = 'RECIEVE_LOGIN_SUCESS';
export const RECIEVE_LOGIN_FAIL = 'RECIEVE_LOGIN_FAIL';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const RECIEVE_REGISTER_SUCESS = 'RECIEVE_REGISTER_SUCESS';
export const RECIEVE_REGISTER_FAIL = 'RECIEVE_REGISTER_FAIL';
export const REQUEST_VOTE = 'REQUEST_VOTE';
export const RECIEVE_VOTE = 'RECIEVE_VOTE';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECIEVE_LOGOUT = 'RECIEVE_LOGOUT';
export const ADD_ERROR = 'ADD_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';

var host = "http://localhost:3000";

if(process.env.NODE_ENV === 'production') {
    var protocol = location.protocol;
    var slashes = protocol.concat("//");
    host = slashes.concat(window.location.hostname);
}
export function attemptVote(selectedPoll, selectedChoice, username) {
    let formBody = "votedChoice=" + selectedChoice;

    console.log(selectedChoice);

    return function(dispatch) {
        dispatch(requestVote());
        return fetch((host + '/api/polls/' + selectedPoll), {
            method: 'PUT',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            dispatch(recieveVote());
            if(response.status == 200) {
                dispatch(fetchPolls());
            }
        })
        .catch(function(err) {
            console.log(err);
            dispatch(recieveVote());
        });
    }
}

export function fetchPolls() {
    return function (dispatch) {
        console.log(host + "/api/polls");
        dispatch(requestPolls());
        return fetch(host + '/api/polls', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(json => 
            dispatch(recievePolls(json))
        );
    }
}

export function attemptLogin(data) {    
    let formBody = [];

    for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return function(dispatch) {
        dispatch(requestLogin());
        return fetch(host + '/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json()
            .catch(() => {
                dispatch(recieveLoginFail());
                dispatch(addError({message: "Incorrect email or password"}));
            })
        )
        .then(json => {
            if(json) {
                dispatch(recieveLoginSucess(json));
            }
        })
        .catch(response => {
            dispatch(recieveLoginFail());
            dispatch(addError({message: "Could not log in"}));
        });
    }
}

export function attemptRegister(data) {
    var formBody = [];

    for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return function(dispatch) {
        dispatch(requestRegister());
        return fetch(host + '/api/auth/register', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
        .then(response => response.json())
        .then(json => {
            if(json) {
                if(json.error) {
                    dispatch(recieveRegisterFail())
                    dispatch(addError(json));
                    return;
                }
                console.log(json);
                dispatch(recieveRegisterSucess(json))
            }
        })
        .catch(() => {
            dispatch(recieveRegisterFail());
            dispatch(addError({message: "Unable to register"}));
        });
    }
}

export function attemptLogout() {
    return function(dispatch) {
        dispatch(requestLogout());
        fetch(host + "/api/auth/logout", {
            method: 'GET',
            credentials: 'include'
        }).then(response => {
            if(response.status === 200) {
                dispatch(recieveLogout());
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function attemptPollCreate(data, username) {
    var formBody = [];

    for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    formBody += "&createdBy=" + username;

    return function(dispatch) {
        dispatch(requestPollCreate());
        return fetch(host + '/api/polls', {
            credentials: 'include',
            method: 'POST',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
        .then(response => response.json())
        .then(json => {
            if(json) {
                if(json.error) {
                    dispatch(recievePollCreateFail());
                    dispatch(addError(json));
                    return;
                }
                dispatch(recievePollCreateSucess(json));
                dispatch(fetchPolls());
                history.push('/');
            }
        })
        .catch(() => {
            dispatch(recievePollCreateFail());
            dispatch(addError(json));
        });
    }
}

export function invalidatePolls() {
    return {
        type: INVALIDATE_POLLS,
    }
}

export function requestPolls() {
    return {
        type: REQUEST_POLLS,
    }
}

export function recievePolls(json) {
    return {
        type: RECIEVE_POLLS,
        results: json
    }
}

export function requestPollCreate() {
    return {
        type: REQUEST_POLL_CREATE,
    }
}

export function recievePollCreateSucess(poll) {
    return {
        type: RECIEVE_POLL_CREATE_SUCESS,
    }
}

export function recievePollCreateFail() {
    return {
        type: RECIEVE_POLL_CREATE_FAIL,
    }
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

export function recieveLoginSucess(json) {
    return {
        type: RECIEVE_LOGIN_SUCESS,
        username: json.username,
        isAuthenticated: true,
    }
}

export function recieveLoginFail() {
    return {
        type: RECIEVE_LOGIN_FAIL,
    }
}

export function requestRegister() {
    return {
        type: REQUEST_REGISTER,
    }
}

export function recieveRegisterSucess(json) {
    return {
        type: RECIEVE_REGISTER_SUCESS,
        username: json.username,
        isAuthenticated: true,
    }
}

export function recieveRegisterFail() {
    return {
        type: RECIEVE_REGISTER_FAIL,
    }
}

export function requestLogout() {
    return {
        type: REQUEST_LOGOUT
    }
}

export function recieveLogout() {
    return {
        type: RECIEVE_LOGOUT
    }
}

export function requestVote() {
    return {
        type: REQUEST_VOTE
    }
}

export function recieveVote(json) {
    return {
        type: RECIEVE_VOTE,
        poll: json
    }
}

export function addError(json) {
    return {
        type: ADD_ERROR,
        message: json.message
    }
}

export function deleteError(index) {
    return {
        type: DELETE_ERROR,
    }
}