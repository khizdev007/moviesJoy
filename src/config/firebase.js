
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBVB73f3foEpVfTK6qrRKZuQb3xKnS-FAc",
    authDomain: "moviejoy-43cc0.firebaseapp.com",
    projectId: "moviejoy-43cc0",
    storageBucket: "moviejoy-43cc0.appspot.com",
    messagingSenderId: "315721749694",
    appId: "1:315721749694:web:57fa65191200b009fbfaef",
    measurementId: "G-K0XCKMK69X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const  db = getFirestore(app);
export const  storage = getStorage(app)