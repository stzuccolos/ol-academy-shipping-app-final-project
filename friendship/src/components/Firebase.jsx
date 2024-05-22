import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  Firebase_apiKey,
  Firebase_appId,
  Firebase_authDomain,
  Firebase_projectId,
  Firebase_storageBucket,
  Firebase_messagingSenderId,
} from "../config.js";

const app = initializeApp({
    apiKey: Firebase_apiKey,
    authDomain: Firebase_authDomain,
    projectId: Firebase_projectId,
    storageBucket: Firebase_storageBucket,
    messagingSenderId: Firebase_messagingSenderId,
    appId: Firebase_appId,
});

export const auth = getAuth(app);
export default app;