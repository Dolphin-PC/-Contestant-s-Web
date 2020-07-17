import * as Ref from '../config/firebase';
import * as types from './types';
import firebase from 'firebase/app';

// Firebase Auth
export const signIn = (credentials) => {
  return (dispatch, getState) => {
    firebase
      .auth()(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const addLanding = (newLanding) => async (dispatch) => {
  Ref.LandingRef.push().set(newLanding);
};

export const completeLanding = (completeLandingId) => async (dispatch) => {
  Ref.LandingRef.child(completeLandingId).remove();
};

export const fetchLanding = () => async (dispatch) => {
  Ref.LandingRef.on('value', (snapshot) => {
    dispatch({
      type: types.FETCH_LANDING,
      payload: snapshot.val(),
    });
  });
};

export const getUserData = (userName, userUID) => async (dispatch) => {
  Ref.UserDBRef.child(`${userName}(${userUID})`).on('value', (snapshot) => {
    dispatch({
      type: types.GET_USERDATA,
      payload: snapshot.val(),
    });
  });
};
export const fetchUserData = (
  userName,
  userEmail,
  userUID,
  isAuth,
  isSupporter
) => async (dispatch) => {
  Ref.UserDBRef.child(`${userName}(${userUID})`).once('value', (snapshot) => {
    if (snapshot.exists()) {
      console.log('exist');
    } else {
      Ref.UserDBRef.child(`${userName}(${userUID})`).update({
        userName: userName,
        userEmail: userEmail,
        userUID: userUID,
        isAuth: false,
        isSupporter: false,
      });
    }
  });
};
export const logoutUserData = () => async (dispatch) => {
  dispatch({
    type: types.LOGOUT_USERDATA,
  });
};
