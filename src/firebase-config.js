import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCoNQ2MNp-q9vSPb7ZDYBHr2G76pZxIzfg",
  authDomain: "grasshopper-2f895.firebaseapp.com",
  projectId: "grasshopper-2f895",
  storageBucket: "grasshopper-2f895.appspot.com",
  messagingSenderId: "236872774571",
  appId: "1:236872774571:web:c41bbeafa227fd562bd8ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);