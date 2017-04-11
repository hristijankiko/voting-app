// Actions
import fetch from 'isomorphic-fetch';

export const FETCH_POLLS = 'FETCH_POLLS';
export const INVALIDATE_POLLS = 'INVALIDATE_POLLS';
export const REQUEST_POLLS = 'REQUEST_POLLS';
export const RECIEVE_POLLS = 'RECIEVE_POLLS';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECIEVE_LOGIN = 'RECIEVE_LOGIN';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const RECIEVE_REGISTER = 'RECIEVE_REGISTER';

export function fetchPolls() {
    return function (dispatch) {
        dispatch(requestPolls());
        return fetch('http://localhost:3000/api/polls')
        .then(response => response.json())
        .then(json => 
            dispatch(recievePolls(json))
        );
    }
}

export function attemptLogin(data) {
    console.log("Username: " + data.username + " Password: " + data.password);
    
    let formBody = [];

    for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return function(dispatch) {
        dispatch(requestLogin());
        return fetch('http://localhost:3000/', {
            method: 'POST',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json)
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
        return fetch('http://localhost:3000/register', {
            method: 'POST',
            body: formBody,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
        .then(response => response.json)
        .then(json =>
            dispatch(recieveRegister(json))
        );
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

export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

export function recieveLogin(json) {
    return {
        type: RECIEVE_LOGIN,
        loginData: json
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
        registerData: json
    }
}