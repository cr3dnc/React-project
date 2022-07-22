import profilereducer, { addPostActionCreator, deletePost } from './profile_reducer';
import React from 'react';

let state = {
    posts: [
        { id: "1", message: "Hi, how are you", likecount: "1" },
        { id: "2", message: "Its my first post", likecount: "2" },
        { id: "3", message: "Its my second post", likecount: "3" }
    ]
}

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("test text");
    //2. action
    let newState = profilereducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("test text");
    //2. action
    let newState = profilereducer(state, action);
    //3. expectation
    expect(newState.posts[3].message).toBe("test text");
});

it('after deleting length shouldnt be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1);
    //2. action
    let newState = profilereducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(2);
});
