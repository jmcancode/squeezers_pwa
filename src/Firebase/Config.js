import firebase from "firebase/app"
import "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

export const db = app.firestore();
firebase.firestore().settings({timestampsInSnapshots: true});

export default app;