import React from 'react';
import {  addPostActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.posts             
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (addNewPost) => {
            dispatch(addPostActionCreator(addNewPost));
        }    
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;