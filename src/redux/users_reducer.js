import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

let initialState = {
    users: [

    ],
    currentPage: 1,
    pageSize: 5,
    totalPage: 0,
    isFetching: true,
    toggleButtonDisable: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        case PAGE_SIZE:
            return {
                ...state, pageSize: action.pageSize
            }
        case TOTAL_PAGE:
            return {
                ...state, totalPage: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_PAGE:
            return {
                ...state, totalPage: action.count
            }
        case IS_FETCHING_PRELOADER:
            return {
                ...state, isFetching: action.isFetching
            }
        case IS_FETCHING_BUTTON_DISABLE:
            return {
                ...state, toggleButtonDisable: action.isFetching ?
                    [...state.toggleButtonDisable, action.userId]
                    : state.toggleButtonDisable.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export default usersReducer;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const PAGE_SIZE = 'PAGE_SIZE';
const TOTAL_PAGE = 'TOTAL_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE';
const IS_FETCHING_PRELOADER = 'IS_FETCHING_PRELOADER';
const IS_FETCHING_BUTTON_DISABLE = 'IS_FETCHING_BUTTON_DISABLE';
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const currentPage = (pageNumber) => ({ type: CURRENT_PAGE, pageNumber })
export const pageSize = (pageSize) => ({ type: PAGE_SIZE, pageSize })
export const totalPage = (count) => ({ type: TOTAL_PAGE, count })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalPage = (count) => ({ type: SET_TOTAL_PAGE, count })
export const isFetchingPreloader = (isFetching) => ({ type: IS_FETCHING_PRELOADER, isFetching })
export const isFetchingButtonDisable = (isFetching, userId) => ({ type: IS_FETCHING_BUTTON_DISABLE, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isFetchingPreloader(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(isFetchingPreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalPage(data.totalCount));
        dispatch(setCurrentPage(currentPage));
    };
}

const followUnfillowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(isFetchingButtonDisable(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(isFetchingButtonDisable(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfillowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    };
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfillowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    };
}

