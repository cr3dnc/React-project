import React from 'react';
import { addMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedicrect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: (addNewDialogsMessage) => {
            dispatch(addMessageActionCreator(addNewDialogsMessage));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedicrect
)(Dialogs)