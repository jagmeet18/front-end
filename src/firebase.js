import { createContext } from 'react';
// import 'firebase-admin/firestore';
import firebase from 'firebase'
import SERVICE_ACCOUNT_KEY from './keys/SERVICE_ACCOUNT_KEY'

const firebaseApp = firebase.initializeApp(
	{
		credential: firebase.credential.cert(SERVICE_ACCOUNT_KEY),
	},
	"insights-server"
)

// import {initializeApp} from "firebase-admin/app";

const FirebaseContext = createContext(null)

// const firebaseConfig = {
//   apiKey: "AIzaSyAbzQ9KWdzIgc7WQBYBcwNPVVlfJJ62o_Q",
//   authDomain: "insights-server-fd594.firebaseapp.com",
//   projectId: "insights-server-fd594",
//   storageBucket: "insights-server-fd594.appspot.com",
//   messagingSenderId: "296327912616",
//   appId: "1:296327912616:web:23a251ebb954f7473ef69d",
//   measurementId: "G-DTD0FKZHPM"
// };

// const firebase = initializeApp(firebaseConfig);

// const { FieldValue } = firebase.firestore;

const db = firebase.firestore(firebaseApp)

export { db };
export default FirebaseContext;