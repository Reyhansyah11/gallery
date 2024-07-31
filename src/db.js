// src/db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/LoginSignUpTutorial'; // Ganti dengan URI MongoDB Anda
let db;

async function connectDB() {
  if (db) return db;
  const client = new MongoClient(uri); // Hapus opsi useNewUrlParser dan useUnifiedTopology
  await client.connect();
  db = client.db();
  return db;
}

export default connectDB;
