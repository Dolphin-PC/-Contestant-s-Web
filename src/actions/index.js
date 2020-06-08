import { todosRef, LandingRef, Firestore } from '../config/firebase';
import { FETCH_TODOS, FETCH_LANDING } from './types';
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

// Firebase Database
export const addToDo = (newToDo) => async (dispatch) => {
  todosRef.push().set(newToDo);
};

export const completeToDo = (completeToDoId) => async (dispatch) => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async (dispatch) => {
  todosRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val(),
    });
  });
};

export const addLanding = (newLanding) => async (dispatch) => {
  LandingRef.push().set(newLanding);
};

export const completeLanding = (completeLandingId) => async (dispatch) => {
  LandingRef.child(completeLandingId).remove();
};

export const fetchLanding = () => async (dispatch) => {
  LandingRef.on('value', (snapshot) => {
    dispatch({
      type: FETCH_LANDING,
      payload: snapshot.val(),
    });
  });
};
