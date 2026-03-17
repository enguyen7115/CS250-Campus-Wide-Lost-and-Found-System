import express from "express";
const app = express();
const port = 3000;
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url';

app.use(cors())
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../dist')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.post('/api/signup', (req, res) => {
  console.log('Received signup data:', req.body);
  res.json({ message: 'Signup successful', data: req.body });
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});