// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzPGTwDLXTqjJEU6arEXODUthBuUwA5_M",
  authDomain: "project-92d1e.firebaseapp.com",
  databaseURL: "https://project-92d1e-default-rtdb.asia-southeast1.firebasedatabase.app/", 
  projectId: "project-92d1e",
  storageBucket: "project-92d1e.appspot.com",
  messagingSenderId: "358484980980",
  appId: "1:358484980980:web:0a4eb55daa3a4f115b9aa1",
  measurementId: "G-7X50S3H6RW"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export const firebase_db = firebase.database()