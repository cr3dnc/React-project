import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
    id: null,
    login: null,
    email: null,
    isLogged: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state, ...action.authData
            }
        default:
            return state;
    }
}
export default authReducer;

const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const setAuthData = (id, login, email, isLogged) => ({ type: SET_AUTH_DATA, authData: { id, login, email, isLogged } });

export const auth = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setAuthData(id, login, email, true));
        }
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(auth());
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Common error";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
        }
    }
}

