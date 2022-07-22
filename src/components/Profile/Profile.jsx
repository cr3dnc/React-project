import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
        profileSetPhoto={props.profileSetPhoto} profileInfoSetData={props.profileSetData} id={props.userId} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
