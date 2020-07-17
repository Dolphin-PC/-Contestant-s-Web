import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
//Config
import { FirebaseConfig } from '../config/keys';

export const fireBase = firebase;

export const FirebaseApp = firebase.initializeApp(FirebaseConfig);

// FireStore
const firestore = FirebaseApp.firestore();
const firestore_settings = {};
export const Firestore = firestore.settings(firestore_settings);

// Realtime DB
const databaseRef = firebase.database().ref();
export const dbRef = databaseRef;
export const UserDBRef = databaseRef.child('user');
// export const todosRef = databaseRef.child('todos');
export const LandingRef = databaseRef.child('landing');
export const teamList_Ref = databaseRef.child('teamList');
export const curriculum_Ref = databaseRef.child('curriculum');
