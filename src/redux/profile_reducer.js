import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
    posts: [
        { id: "1", message: "Hi, how are you", likecount: "1" },
        { id: "2", message: "Its my first post", likecount: "2" },
        { id: "3", message: "Its my second post", likecount: "3" }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let updatePost = action.addNewPost;
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: updatePost, likecount: 0 }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        case SET_USERS_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}
export default profileReducer;

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
export const addPostActionCreator = (addNewPost) => ({ type: ADD_POST, addNewPost })
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const deletePost = (postId) => ({ type: DELETE_POST, id: postId })

export const getUsersProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUsersProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const profileSetData = (profile, id) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(id));
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Common error";
            dispatch(stopSubmit("ProfileEdit", { _error: message }));
            return Promise.reject(response.data.messages[0]);
        }
    }
}

export const profileSetPhoto = (photo, id) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfilePhoto(photo);
        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(id));
        }
    }
}
