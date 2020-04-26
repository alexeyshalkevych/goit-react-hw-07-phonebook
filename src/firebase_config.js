import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'redux-async-phonebook.firebaseapp.com',
  databaseURL: 'https://redux-async-phonebook.firebaseio.com',
  projectId: 'redux-async-phonebook',
  storageBucket: 'redux-async-phonebook.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
const db = firebase.database();

export default db;
