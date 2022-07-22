let initialState = {
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How are you" },
        { id: "3", message: "Fine" },
        { id: "4", message: "Ok" },
        { id: "5", message: "Me too" }
    ],
    dialogs: [
        { id: "1", name: "Masha" },
        { id: "2", name: "Sasha" },
        { id: "3", name: "Dmitry" },
        { id: "4", name: "Lena" },
        { id: "5", name: "Vladimir" },
        { id: "6", name: "Vitaly" },
        { id: "7", name: "Natasha" },
        { id: "8", name: "Anna" }
    ] 
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {        
        case SEND_MESSAGE:
            let updateMessage = action.addNewDialogsMessage;
            return {
                ...state,              
                messages: [...state.messages, { id: 5, message: updateMessage }]               
            }
        default:
            return state;
    }
}
export default dialogsReducer;

const SEND_MESSAGE = 'SEND-MESSAGE';
export const addMessageActionCreator = (addNewDialogsMessage) => ({ type: SEND_MESSAGE, addNewDialogsMessage });