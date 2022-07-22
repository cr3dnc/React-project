import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const DialogsItem = (props) => {

    let dialogsElements = props.dialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    return (
        <div className={classes.dialogItems}>
            {dialogsElements}
        </div>
    )
}

export default DialogsItem;