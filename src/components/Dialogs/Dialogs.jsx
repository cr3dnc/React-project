import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogItem';
import Messages from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../utils/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';

const fieldMaxLenght = maxLength(10);

const Dialogs = (props) => {
    let addNewMessage = (value) => {
        props.addMessageActionCreator(value.addNewDialogsMessage);
    }   
    return (
        <div className={classes.dialogs}>
            <div>
                <DialogsItem dialogData={props.dialogs} />
            </div>
            <div>
                <Messages messageData={props.messages} />
            </div>
            <AddDialogsMessageRedux onSubmit={addNewMessage} />
        </div>
    )
}

const addDialogsMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="addNewDialogsMessage" placeholder="Enter your message"
                validate={[required, fieldMaxLenght]} />
            <div><button>Send message</button></div>
        </form>
    )
}
const AddDialogsMessageRedux = reduxForm({ form: "addDialogsMessage" })(addDialogsMessage);

export default Dialogs;