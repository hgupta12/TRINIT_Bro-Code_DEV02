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
            state.id = action.payload.id;
            state.userName = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;
