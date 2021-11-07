import appData from "./data/appData";
const appState = appData;
// import appData from "./appData/appData";
// import friends from "./usersData/friends";
// import messages from "./usersData/messages";
// import profile from "./usersData/profile";
// import whatToFollow from "./usersData/whatToFollow";
// import header from "./usersData/header";
// import headerReducer from "./reducers/headerReducer";
// import profileReducer from "./reducers/profileReducer";
// import createObservable from "../lib/createObservable";
// import messagesReducer from "./reducers/messagesReducer";

// const appState = appData;
// const stateObj = { friends, messages, profile, whatToFollow, header };

// class Store {
//    constructor(stateObj) {
//       this.state = stateObj;
//       this.inputObservationObject = createObservable();
//    }

//    dispatch(action) {
//       // * dialog
//       this.state.messages = messagesReducer(this.state.messages, action);

//       // * profile
//       this.state.profile = profileReducer(this.state.profile, action);

//       // * header
//       this.state.header = headerReducer(this.state.header, action);

//       this.inputObservationObject.fire();
//    }
// }

// let store = new Store(stateObj);

// export { appState, store }

export { appState }