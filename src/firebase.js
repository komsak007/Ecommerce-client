import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1uH6OG7d3OtYEG9daP9GU3T6Pall7CfY",
  authDomain: "ecommerce-a9f03.firebaseapp.com",
  databaseURL: "https://ecommerce-a9f03.firebaseio.com",
  projectId: "ecommerce-a9f03",
  storageBucket: "ecommerce-a9f03.appspot.com",
  messagingSenderId: "154979218746",
  appId: "1:154979218746:web:b45dc7b849f2cc2e32cc03",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
