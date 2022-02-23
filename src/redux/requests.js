import { http } from './http-common';

export const signup = userData => {
  return http.post('users/signup', userData);
};

export const logIn = userData => {
  return http.post('users/login', userData);
};

export const logOut = () => {
  return http.post('users/logout');
};