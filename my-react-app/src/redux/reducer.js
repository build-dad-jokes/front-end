import Promise from 'es6-promise';
import axios from 'axios';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const JOKES_SUCCESS = 'JOKES_SUCCESS';

const SIGNUP_PENDING = 'SIGNUP_PENDING';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const baseUrl = 'https://dad-jokes-bw.herokuapp.com/api';



export function signUp(body) {
  return function(dispatch) {
    dispatch({ type: SIGNUP_PENDING })
    axios.post(`${baseUrl}/auth/register`, body)
        .then(resp => dispatch({ type: SIGNUP_SUCCESS, payload:resp.body }))
        .catch(err => dispatch({type: SIGNUP_ERROR, err}));

   }
}


function setLoginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: LOGIN_ERROR,
        loginError
    };
}

function setJokes(jokes) {
    return {
        type: JOKES_SUCCESS,
        jokes
    }
}

export function getJokes() {
    return dispatch => {
        sendJokesRequest()
            .then(resp => dispatch(setJokes(resp.data)))
            .catch(err => console.log(err));
    }
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(email, password)
            .then(success => {
                localStorage.token=success.data.token; 
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(err => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(err));
            });
    };
}

export function register(email, password) {
    return dispatch => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendRegisterationRequest(email, password)
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(setLoginSuccess(true));
            })
            .catch(err => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(err));
            });
    };
}

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    LoginError: null
}, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                
            };
        case SIGNUP_PENDING:
            return {
                ...state,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
            };

        default:
            return state;
    }
}

function sendLoginRequest(email, password) {
    const payload = { username: email, password };
    return axios.post(`${baseUrl}/auth/login`, payload);
}

function sendRegisterationRequest(email, password) {
    const payload = { username: email, password };
    return axios.post(`${baseUrl}/auth/register`, payload);
}

function sendJokesRequest() {
    return axios.get(`${baseUrl}/jokes`);
}




