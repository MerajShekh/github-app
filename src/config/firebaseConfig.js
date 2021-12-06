import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbag-iSErgppuB52Ct37BiQgT9PB7A9iA",
  authDomain: "socialapp-6e766.firebaseapp.com",
  databaseURL: "https://socialapp-6e766-default-rtdb.firebaseio.com",
  projectId: "socialapp-6e766",
  storageBucket: "socialapp-6e766.appspot.com",
  messagingSenderId: "678621214663",
  appId: "1:678621214663:web:10337ce189ad8175a74be2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
