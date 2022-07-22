import React from 'react';
import classes from './../../Common/FormsControls/FormsControls.module.css';
import Contacts from './ProfileContacts';
import { createField, Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileData = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.profileInfo}>
        <button>Save</button>
        <div className={classes.formSummoryError}>
                {error}
            </div>
        <div>
          <b>AboutMe:</b> {createField("About me", "aboutMe", [], Input)}
        </div>
        <div>
          <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactKey={key} contactValue={createField(key, "contacts." + key, [], Input)} />
          })}
        </div>
        <div>
          <b>LookingForAJob:</b> {createField(null, "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
          <b>LookingForAJobDescription:</b> {createField("Looking for a job description", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
          <b>FullName:</b> {createField("Full name", "fullName", [], Textarea)}
        </div>
      </div>
    </form>
  )
}
const ProfileSetData = reduxForm({ form: 'ProfileEdit' })(ProfileData);

export default ProfileSetData;
