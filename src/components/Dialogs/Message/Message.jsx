import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.messages}>{props.message}</div>
    )
}

const Messages = (props) => {

    let messagesElements = props.messageData.map(m => <Message message={m.message} key={m.id} id={m.id} />);

    return (
        <div className={classes.messages}>
            {messagesElements}
        </div>
    )
}

export default Messages;