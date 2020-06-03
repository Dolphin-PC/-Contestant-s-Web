import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';

export const FirebaseApp = firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child('todos');
export const LandingRef = databaseRef.child('landing');

const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };
