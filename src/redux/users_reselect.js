import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(() => true);
})
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalPage = (state) => {
    return state.usersPage.totalPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getToggleButtonDisable = (state) => {
    return state.usersPage.toggleButtonDisable;
}