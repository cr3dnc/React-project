import { auth } from './auth_reducer';

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state, initialize: true
            }
        default:
            return state;
    }
}
export default appReducer;

const SET_INITIALIZE = 'SET_INITIALIZE';
export const setInitialize = () => ({ type: SET_INITIALIZE })

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(auth());
        Promise.all([promise]).then(() => {
            dispatch(setInitialize());
        });
    }
}