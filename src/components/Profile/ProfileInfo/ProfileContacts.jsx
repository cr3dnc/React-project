import React from 'react';
import classes from './ProfileInfo.module.css';

const Contacts = ({ contactKey, contactValue }) => {
  return (
    <div className={classes.contact}><b>{contactKey}</b>: {contactValue}</div>
  );
}

export default Contacts;
