import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    id: null,
    userName: '',
    emailId:'',
    teams:{},
    currentIssues:[],
    closedIssues:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser(state,action){
            // will recieve auth as payload
            state.id = action.payload.currentUser.uid;
            state.userName = action.payload.userName;
            state.email = action.payload.currentUser.email;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;
