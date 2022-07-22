import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "07b06c7b-15fd-4aae-91bf-003859597698" },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => { return response.data })
        )
    },
    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => { return response.data })
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => { return response.data })
        )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, { status: status })
        )
    },
    updateProfile(profile) {
        return (
            instance.put(`profile`, profile)
        )
    },
    updateProfilePhoto(photo) {
        return (
            instance.put(`profile/photo`, photo, { headers: { 'Content-type': 'multipart/form-data' } })
        )
    }
}

export const authAPI = {
    authMe() {
        return (
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, { email, password, rememberMe })
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
}
