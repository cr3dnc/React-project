import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileSetData from './ProfileInfoSetData';
import Contacts from './ProfileContacts';

const ProfileInfo = ({ profile, status, updateStatus, profileSetPhoto, profileInfoSetData, id }) => {
  let [editMode, setEditMode] = useState(false);
  const onSubmit = (formData) => {
    profileInfoSetData(formData, id)
      .then(() => {
        setEditMode(false);
      });
  }
  const handleSetPhoto = () => {
    let formData = new FormData();
    let imageFile = document.querySelector('#photo');
    formData.append("image", imageFile.files[0]);
    profileSetPhoto(formData, id)
  }
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        {!profile.photos.large ?
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw&s" alt="Favorites" title="Favorites" />
          : <img src={profile.photos.large} />}
        <div>  
        <input type="file" id="photo"/>        
        <button onClick={() => handleSetPhoto()} >Upload Photo</button>        
        </div>
      </div>
      <div className={classes.descriptionBlock}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      {!editMode ? <ProfileGetData profile={profile} setEditMode={setEditMode} />
        : <ProfileSetData initialValues={profile} profile={profile} onSubmit={onSubmit} />}
    </div>
  );
}
const ProfileGetData = ({ profile, setEditMode }) => {
  return (
    <div className={classes.profileInfo}>
      <button onClick={() => setEditMode(true)}>Edit Profile</button>
      <div>
        <b>AboutMe:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
          return <Contacts key={key} contactKey={key} contactValue={profile.contacts[key]} />
        })}
      </div>
      <div>
        <b>LookingForAJob:</b> {!profile.lookingForAJob ? "no" : "yes"}
      </div>
      <div>
        <b>LookingForAJobDescription:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>FullName:</b> {profile.fullName}
      </div>
    </div>
  )
}

export default ProfileInfo;
