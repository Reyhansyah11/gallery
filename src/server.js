// src/server.js
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db.js';

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const db = await connectDB();
    const users = db.collection('collection1');

    // Log untuk debug
    console.log(`Received login attempt with name: ${name} and password: ${password}`);

    // Cek apakah name dan password ada di database
    if (!name || !password) {
      return res.status(400).json({ message: 'Harap isi nama dan password' });
    }

    const user = await users.findOne({ name, password });

    if (user) {
      res.json({ message: 'Login berhasil' });
    } else {
      res.status(401).json({ message: 'Nama pengguna atau password salah' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan di server' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
