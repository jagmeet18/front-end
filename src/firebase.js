import { createContext } from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import {initializeApp} from "firebase/app";

const FirebaseContext = createContext(null)

const firebaseConfig = {
  apiKey: "AIzaSyAbzQ9KWdzIgc7WQBYBcwNPVVlfJJ62o_Q",
  authDomain: "insights-server-fd594.firebaseapp.com",
  projectId: "insights-server-fd594",
  storageBucket: "insights-server-fd594.appspot.com",
  messagingSenderId: "296327912616",
  appId: "1:296327912616:web:23a251ebb954f7473ef69d",
  measurementId: "G-DTD0FKZHPM"
};

const firebase = initializeApp(firebaseConfig);

const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
export default FirebaseContext;