import { Object } from "core-js";

const UPDATE_USER_NICKNAME = (state,payload) =>{
    state.userStatus.nickName = payload;
}

const GET_USER_STATUS = (state,payload) => {
    state.userStatus = payload;
    console.log(state.userStatus);
}

// Function to add people to the group
const ADD_GROUP_SIZE = (state) => {
    state.currentListStatus.groupSize +=1;
    console.log(state.currentListStatus.groupSize);
}

//// Function to subtract people from the group
const SUBTRACT_GROUP_SIZE = (state) => {
    state.currentListStatus.groupSize -=1;
    console.log(state.currentListStatus.groupSize);
}

//payload is receiving a parameter
const SELECT_RESTAURANT = (state,payload) =>{
    // const newSel = Object.assign(state.selRest, payload);
    state.selRest = payload;
    // console.log(newSel);
}

const ADD_TO_WAITING_LIST = (state, payload) => {
    state.currentListStatus = payload;
}


const JOIN_LIST = (state,payload) => {
    state.waitList.push(payload);
    state.currentListStatus.currentSpot++;
    state.currentListStatus.joinTime=new Date();
    console.log(state.waitList);
}

//Update menu gallery imgs
const UPDATE_GALLERY_IMGS = (state,payload) => {
    state.restaurantImgs = payload;
}

//Toggle pop up confirmation

const TOGGLE_POPUP = (state) => {
    state.popUpShow = !state.popUpShow;
}

const TOGGLE_POPUP_DROP = (state) => {
    state.popUpShowD = !state.popUpShowD;
}

//Toggle isInLine

const TOGGLE_ISINLINE = (state) => {
    state.userStatus.isInLine = !state.userStatus.isInLine;
}

//Empty waitlist Array
const EMPTY_WAITLIST = (state) => {
    state.waitList = [];
}

//Empty currentListStatus object
const EMPTY_STATUS = (state) => {
    state.currentListStatus.estTime = 0;
    state.currentListStatus.currentSpot = 0;
    state.currentListStatus.rName = '';
    state.currentListStatus.rid = '';
    state.currentListStatus.groupSize = 1;
    state.currentListStatus.uName = '';
    state.currentListStatus.uid = '';
    state.currentListStatus.uInLine = '';
    state.currentListStatus.did = '';
}

//Profile Update Nickname
const UPDATE_NICKNAME = (state,payload) => {
    state.userStatus.nickName = payload;
}

//Profile Update Phone Number
const UPDATE_PHONENUMBER = (state,payload) => {
    state.userStatus.phone = payload;
}

//Profile Update Profile
const UPDATE_PROFILE = (state,payload) => {
    state.userStatus.profile = payload;
}


//Update current spot
const UPDATE_CURRENT_SPOT = (state,payload) => {
    state.currentListStatus.currentSpot = payload;
}



export default {
    UPDATE_USER_NICKNAME,
    GET_USER_STATUS,
    ADD_GROUP_SIZE,
    SUBTRACT_GROUP_SIZE,
    SELECT_RESTAURANT,
    JOIN_LIST,
    ADD_TO_WAITING_LIST,
    UPDATE_GALLERY_IMGS

}