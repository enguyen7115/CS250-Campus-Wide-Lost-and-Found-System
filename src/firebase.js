import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

const webApp = initializeApp(firebaseConfig);
const clientDb = getFirestore(webApp);
const clientAuth = getAuth(webApp);

setPersistence(clientAuth, browserSessionPersistence);

function login(e) {
  
}

function signup(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
    createUserWithEmailAndPassword(clientAuth, email, password).then(
      async (userCredential) => {
        const idToken = await userCredential.user.getIdToken();
        await axios({
          method: "post",
          url: "/api/signup",
          headers: {
            Authorization: `Bearer ${idToken}`,
            "Content-Type": "application/json",
          },
        })
        window.location.href = "/";
      },
    ).catch((error) => {
        if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
        return;
        }
        console.log("Error signing up user: ", error);
        alert("Error creating user");
        return;
    });
}

function signout() {
  try {
    signOut(clientAuth).then(() => {
      window.location.href = "/";
    });
  } catch (error) {
    alert("Error signing out user");
    return;
  }
}

export { clientDb, clientAuth, login, signup, signout };
