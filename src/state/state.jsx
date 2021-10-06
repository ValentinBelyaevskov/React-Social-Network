import appData from "./appData/appData"
import friends from "./usersData/friends"
import messages from "./usersData/messages"
import profile from "./usersData/profile" 
import whatToFollow from "./usersData/whatToFollow"

const appState = appData
const state = {friends, messages, profile, whatToFollow}

export {state, appState}