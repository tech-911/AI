import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg6ILYRkEFdZwmabASSScDmvUb4G6OcgU",
  authDomain: "react-login-auth-demo.firebaseapp.com",
  projectId: "react-login-auth-demo",
  storageBucket: "react-login-auth-demo.appspot.com",
  messagingSenderId: "576188873025",
  appId: "1:576188873025:web:e16d8531034577f7fd89c0",
};

const app = initializeApp(firebaseConfig);
const fire = getAuth(app);

export default fire;
