import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut } from './requests';

export const signUpThunk = createAsyncThunk(
  'users/signUpUser',
  async userData => {
    const res = await signUp(userData);
  }
);

export const logInThunk = createAsyncThunk(
  'users/signUpUser',
  async userData => {
    const res = await logIn(userData);
  }
);

export const logOutThunk = createAsyncThunk('users/signUpUser', async () => {
  const res = await logOut();
});
