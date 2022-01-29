import {configureStore} from '@reduxjs/toolkit';
import teamSlice from './team-context';
import userSlice from './user-context';

const store = configureStore({
    reducer:{user: userSlice.reducer, team: teamSlice.reducer}
})

export default store;