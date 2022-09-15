import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8aAy8gY4-nBYDvqkDlJ7jlzVLGEPRNbY",
  authDomain: "tjanstformedling.firebaseapp.com",
  projectId: "tjanstformedling",
  storageBucket: "tjanstformedling.appspot.com",
  messagingSenderId: "1034765694932",
  appId: "1:1034765694932:web:453fe5aab9343293384841",
};

initializeApp(firebaseConfig);

let db = getFirestore();
const g_colRef = collection(db, "listings");

const app = createApp(App);
app.use(router);
app.provide("g_colRef", g_colRef);
app.mount("#app");
