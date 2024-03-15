import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { initializeApp as initializeAdminApp } from "firebase-admin/app";
import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMnRfZgptBo0Sfvzict90QSNijM5liugk",
  authDomain: "url-shortener-ba30e.firebaseapp.com",
  databaseURL: "https://url-shortener-ba30e-default-rtdb.firebaseio.com/",
  projectId: "url-shortener-ba30e",
  storageBucket: "url-shortener-ba30e.appspot.com",
  messagingSenderId: "710129886320",
  appId: "1:710129886320:web:6ef72d08c748514cba40b5",
  measurementId: "G-7XLDZLKLR1"
};

/// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// const app = initializeAdminApp({ projectId: "feedie-903e4" });
export const auth = getAuth(app);
export const analytics = getAnalytics(app);