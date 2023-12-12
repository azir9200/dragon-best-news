// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0-fRYt3JwRNi2JW0w0Oz_SJvijPV9wUM",
  authDomain: "dragon-best-news.firebaseapp.com",
  projectId: "dragon-best-news",
  storageBucket: "dragon-best-news.appspot.com",
  messagingSenderId: "173652737535",
  appId: "1:173652737535:web:bdfad2d954859733bbfbca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;