// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbdzTX4cHaG1KeGrBUc-qrFIOx1UGR70o",
  authDomain: "fb-data-5cffb.firebaseapp.com",
  databaseURL: "https://fb-data-5cffb-default-rtdb.firebaseio.com",
  projectId: "fb-data-5cffb",
  storageBucket: "fb-data-5cffb.appspot.com",
  messagingSenderId: "407896243589",
  appId: "1:407896243589:web:9323e30e1cbf222f5b18ec",
  measurementId: "G-H86Q6F1NH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;