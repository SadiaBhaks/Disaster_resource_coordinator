

import express from "express";
const router = express.Router();

export default function authRoutes(db) {
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) return res.status(500).json({ message: "Server error" });
      if (results.length === 0) return res.status(401).json({ message: "Invalid email" });

      const user = results[0];

      // ✅ SIMPLE plain-text check
      if (password !== user.password) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // ✅ Simulate token just for now
      res.json({ token: "fake-token", role: user.role });
    });
  });
  // ✅ Get all volunteers (for admin to assign)
router.get("/volunteers", (req, res) => {
  db.query(
    "SELECT id, name FROM users WHERE role = 'volunteer'",
    (err, results) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.json(results);
    }
  );
});


  return router;
}
