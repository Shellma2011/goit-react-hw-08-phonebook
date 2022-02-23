import { createSlice } from '@reduxjs/toolkit';
import { signUpThunk, logOutThunk, logOutThunk } from '../asyncThunks';

export const authSlice = createSlice({
  name: 'authUser',
  initialState: null,
  extraReducers: {
    [signUpThunk.fullfiled]: (state, action) => {},
    [logInThunk.fullfiled]: (state, action) => {},
    [logOutThunk.fulfilled]: (state, action) => {},
  },
});

// export const { signUpThunk, logOutThunk, logOutThunk } = authSlice.actions;

export default authSlice.extraReducers;
