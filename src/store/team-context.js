import {createSlice} from '@reduxjs/toolkit';

const initalState = {
    name:"",
    members:{},
    creator:{},
    issues:{},
    desc:""
}

const teamSlice = createSlice({
    name:"team",
    initialState,
    reducers:{}
})

export const teamActions = teamSlice.actions;

export default teamSlice;