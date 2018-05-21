import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = authData => ({
  type: actionTypes.AUTH_SUCCESS,
  authData
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const auth = (email, password) => dispatch => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true
  };
  axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD3Cj_jyAuY58UUtTsiC5aE5LwCjNwC3jo', authData)
    .then(response => {
      console.log(response);
      dispatch(authSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(authFail(error));
    });
};