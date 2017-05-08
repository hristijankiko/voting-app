// Actions
import fetch from 'isomorphic-fetch';

export const FETCH_POLLS = 'FETCH_POLLS';
export const INVALIDATE_POLLS = 'INVALIDATE_POLLS';
export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECIEVE_POLLS = 'RECIEVE_POLLS';
export const REQUEST_POLL_CREATE = 'REQUEST_POLL_CREATE';
export const RECIEVE_POLL_CREATE = 'RECIEVE_POLL_CREATE';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const RECIEVE_REGISTER = 'RECIEVE_REGISTER';
export const REQUEST_VOTE = 'REQUEST_VOTE';
export const RECIEVE_VOTE = 'RECIEVE_VOTE';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECIEVE_LOGOUT = 'RECIEVE_LOGOUT';

host = "http://localhost:3000";

if(process.env.NODE_ENV === 'production') {
    var protocol = location.protocol;
    var slashes = protocol.concat("//");
    var host = slashes.concat(window.location.hostname);
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
        return fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(json => 
            dispatch(recieveLogin(json))
        );
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
        return fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            credentials: 'include',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
        .then(response => {
            if(response.status === 200) {
                console.log(response);
                return response.json()
            } else {
                console.log("Error, user not created");
            }})
        .then(json =>{
            console.log(json);
            dispatch(recieveRegister(json))

        }
        );
    }
}

export function attemptLogout() {
    return function(dispatch) {
        dispatch(requestLogout());
        fetch("http://localhost:3000/api/auth/logout", {
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
    console.log(formBody);

    return function(dispatch) {
        dispatch(requestPollCreate());
        return fetch('http://localhost:3000/api/polls', {
            credentials: 'same-origin',
            method: 'POST',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
        .then(response => response.json())
        .then(json => {
            dispatch(recievePollCreate(json))
            dispatch(fetchPolls())
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

export function recievePollCreate(poll) {
    let success = true;
    if(!poll.choices) {
        success = false;
    }
    return {
        type: RECIEVE_POLL_CREATE,
        success: success
    }
}

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

export function recieveLogin(json) {
    return {
        type: RECIEVE_LOGIN,
        username: json.username,
        isAuthenticated: true,
    }
}

export function requestRegister() {
    return {
        type: REQUEST_REGISTER
    }
}

export function recieveRegister(json) {
    return {
        type: RECIEVE_REGISTER,
        username: json.username,
        isAuthenticated: true
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