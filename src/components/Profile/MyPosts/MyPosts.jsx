import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../utils/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const filedMaxLenght = maxLength(10);

const MyPosts = (props) => {
  let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} key={p.id} likecount={p.likecount} />);
  let addPost = (value) => {
    props.addPost(value.addNewPost);
  }
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <AddNewPostRedux onSubmit={addPost} />
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
}

const addNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="addNewPost" placeholder="Enter your post here"
        validate={[required, filedMaxLenght]} />
      <div><button>Add post</button></div>
    </form>
  )
}
const AddNewPostRedux = reduxForm({ form: "addNewPost" })(addNewPost)
export default MyPosts;
