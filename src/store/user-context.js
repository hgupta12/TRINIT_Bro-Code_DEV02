import {createSlice} from '@reduxjs/toolkit';
const initialState ={
    id: null,
    userName: '',
    emailId:'',
    teams:[],
    currentIssues:[],
    closedIssues:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser(state,action){
            state.id = action.payload.id;
            state.userName = action.payload.name;
            state.email = action.payload.email;
        },
        addTeam(state,action){
            state.teams = [...state.teams,{
               name: action.payload.name,
               desc: action.payload.desc,
               id: action.payload.id,
               authorId: action.payload.authorId
            }]
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice;
