import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import requestRoutes from './routes/requests.js';

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'disaster_db',
  port: 3306
});

db.connect(err => {
  if (err) console.error('❌ DB Connection Error:', err);
  else console.log('✅ Connected to MySQL database');
});

// ✅ Register routes AFTER db is ready
app.use("/api", requestRoutes(db));  // 📦 Resource request API
app.use("/api", authRoutes(db));     // 🔐 Auth routes

// ✅ Test Routes
app.get('/', (req, res) => res.send('✅ API is working'));
app.get('/test', (req, res) => res.json({ message: '✅ Test route working' }));

// ✅ Get all resources
app.get("/resources", (req, res) => {
  db.query("SELECT * FROM resources", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ Add new resource
app.post("/resources", (req, res) => {
  const { name, type, quantity } = req.body;
  db.query(
    "INSERT INTO resources (name, type, quantity) VALUES (?, ?, ?)",
    [name, type, quantity],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Resource added", id: result.insertId });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
