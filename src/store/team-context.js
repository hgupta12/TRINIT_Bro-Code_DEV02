import {createSlice} from '@reduxjs/toolkit';

const initialState = {
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