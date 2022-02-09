// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getToken, onMessage } from 'firebase/messaging';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BLU6XZGuhvlBBePBP18cnPuRArmouyxvTie7aMATJYREfmx6dV_LtovSOzDEqa3yBhEJVvyJq8jIqG4Mk3KAjfw' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });