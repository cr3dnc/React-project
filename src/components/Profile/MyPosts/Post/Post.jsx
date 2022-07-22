import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" alt="Favorites" title="Favorites" />
      {props.message}
      <div>
        <span>
          Like {props.likecount + 1}
        </span>
      </div>
    </div>
  );
}

export default Post;
