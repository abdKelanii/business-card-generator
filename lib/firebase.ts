import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQYOUFFxMIt87cWSkxJUSL0HuiNdV75tA",
  authDomain: "business-card-2df02.firebaseapp.com",
  projectId: "business-card-2df02",
  storageBucket: "business-card-2df02.appspot.com",
  messagingSenderId: "43790365096",
  appId: "1:43790365096:web:4d515f36cb279a629a6d9d",
  measurementId: "G-FMM18HN1F1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
