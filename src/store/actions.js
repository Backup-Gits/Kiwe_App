const changeName = (context,payload) => {
    context.commit('UPDATE_USER_NICKNAME',payload);
  };

const getUserStatus = (context,payload) => {
    context.commit('GET_USER_STATUS',payload);
};

const addGroupSize = (context) => {
    context.commit('ADD_GROUP_SIZE');
};

const subtractGroupSize = (context) => {
    context.commit('SUBTRACT_GROUP_SIZE');
};

const assignRest = (context,payload) => {
    context.commit('SELECT_RESTAURANT',payload);
};

//its like the state in mutation
const joinList = (context,payload) => {
    context.commit('JOIN_LIST', payload);
}


export default{
    changeName,
    getUserStatus,
    addGroupSize,
    subtractGroupSize,
    assignRest,
    joinList
} 