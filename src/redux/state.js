import profileReducer from '../redux/profile_reducer';
import dialogsReducer from '../redux/dialogs_reducer';
import sidebarReducer from '../redux/sidebar_reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: "1", message: "Hi, how are you", likecount: "1" },
                { id: "2", message: "Its my first post", likecount: "2" },
                { id: "3", message: "Its my second post", likecount: "3" }
            ],
            updatePost: ''
        },
        messagesPage: {
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
            ],
            updateMessage: ''
        },
        sidebar: {

        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;