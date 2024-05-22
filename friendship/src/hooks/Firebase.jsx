import {firebase} from "firebase/app";
import process from "process";

function useFirebase() {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
    });

    return firebase;    
}

export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
    return firebase.auth().signOut();
};

export default useFirebase;
