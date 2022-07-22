import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from '../redux/profile_reducer';
import dialogsReducer from '../redux/dialogs_reducer';
import sidebarReducer from '../redux/sidebar_reducer';
import usersReducer from '../redux/users_reducer';
import appReducer from '../redux/app_reducer';
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    appPage: appReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;