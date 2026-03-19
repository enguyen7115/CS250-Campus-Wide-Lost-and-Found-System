import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { initializeApp, cert } from "firebase-admin/app";
import serviceAccount from "/Users/munewerkiar/Desktop/App_Dev/credentials/serviceAccount.json" assert { type: "json" };
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
const auth = getAuth();

app.use(cors());
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.post("/api/signup", async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const idToken = bearerToken.split(" ")[1];
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    console.log("User signed up with UID: ", decodedToken.uid);
    res.status(200).json({ message: "User signed up successfully" });
  } catch (error) {
    console.log("Error verifying ID token: ", error);
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
});

app.post("/api/login", async (req, res) => {
  
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
