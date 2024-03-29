import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARSYLCavmIPu5sX3xdl_i_ZMX_r861x60",
  authDomain: "chapter40-jewellery.firebaseapp.com",
  projectId: "chapter40-jewellery",
  storageBucket: "chapter40-jewellery.appspot.com",
  messagingSenderId: "965935510438",
  appId: "1:965935510438:web:53e6a71e7498004d8c1567",
  measurementId: "G-CE95N62KH9",
};

// First we initialize the app
const firebaseApp = initializeApp(firebaseConfig);

// Second we initialize the data base
const db = getFirestore(firebaseApp);

// This gives us a variablt that helps us to handle the signing-in and stuffs like that
const auth = getAuth(firebaseApp);

export { db, auth };
