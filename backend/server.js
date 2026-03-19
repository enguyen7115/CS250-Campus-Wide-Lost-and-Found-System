import express from "express";
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
import validator from 'validator'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, updateDoc, deleteDoc, getDoc, addDoc, serverTimestamp, doc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const port = 3000;

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const webApp = initializeApp(firebaseConfig)
const db = getFirestore(webApp)
const auth = getAuth(webApp)

app.use(cors())
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.post('/api/signup', async (req, res) => {
  const isJSON = res.header('Content-Type', 'application/json');
  if (!isJSON) {  
    res.status(400).json({ message: 'Invalid JSON format' });
    return;
  }
  if (hasValidRequest(req)) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password);
      const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      };
      await createUserDocument(userData, userCredential.user.uid);
      console.log('User created with UID: ', userCredential.user.uid);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        res.status(400).json({ message: 'Email already in use' });
        return;
      }
      res.status(500).json({ message: 'Error creating user' });
      return;
    }
    res.json({ message: 'Signup successful' });
    return;
  } else {
    res.json({ message: 'Invalid signup json data'})
    return;
  }
})

app.post('/api/login', (req, res) => {
  console.log('Received login data:', req.body);
  res.json({ message: 'Login successful' });
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function hasValidRequest(request) {
  if (!request.body.firstName || !request.body.lastName || !request.body.email || !request.body.password) {
    console.log('Missing required fields');
    return false;
  }
  if (typeof request.body.firstName !== 'string' || typeof request.body.lastName !== 'string' || typeof request.body.email !== 'string' || typeof request.body.password !== 'string') {
    console.log('Invalid data types');
    return false;
  }
  if (request.body.firstName.length < 1 || request.body.firstName.length > 20) {
    console.log('Invalid first name length');
    return false;
  }
  if (request.body.lastName.length < 1 || request.body.lastName.length > 20) {
    console.log('Invalid last name length');
    return false;
  }
  if (!validator.isEmail(request.body.email)) {
    console.log('Invalid email format');
    return false;
  }
  if (request.body.password.length < 10) {
    console.log('Password too short');
    return false
  }
  return true;
}

async function createUserDocument(user, uid) {
  const docRef = await setDoc(doc(db, "users", uid), {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    createdAt: serverTimestamp()
  });
}