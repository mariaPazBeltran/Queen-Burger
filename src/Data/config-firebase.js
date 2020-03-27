import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyARn7_AK4oAa6ZgUPAsZDH0UQ3NfC4BTsY',
  authDomain: 'queen-burger.firebaseapp.com',
  databaseURL: 'https://queen-burger.firebaseio.com',
  projectId: 'queen-burger',
  storageBucket: 'queen-burger.appspot.com',
  messagingSenderId: '377278814281',
  appId: '1:377278814281:web:c1a9c4d2c07ec7acd8c798',
});

const db = firebase.firestore();

export default db;
