import express from "express";

const router = express.Router();

export default function requestRoutes(db) {
  // ✅ Submit a new request (public/volunteer user)
  router.post("/requests", (req, res) => {
    const { user_id, resource_type } = req.body;

    if (!user_id || !resource_type) {
      return res.status(400).json({ message: "Missing user_id or resource_type" });
    }

    const sql = "INSERT INTO requests (user_id, resource_type, status) VALUES (?, ?, 'pending')";
    db.query(sql, [user_id, resource_type], (err, result) => {
      if (err) {
        console.error("❌ Error inserting request:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.status(201).json({ message: "✅ Request submitted", id: result.insertId });
    });
  });

  // ✅ Get all requests (Admin)
  router.get("/requests", (req, res) => {
    const sql = "SELECT * FROM requests ORDER BY id DESC";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("❌ Error fetching requests:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json(results);
    });
  });

  // ✅ Get requests for a specific user (UserDashboard)
  router.get("/requests/:user_id", (req, res) => {
    const { user_id } = req.params;
    const sql = "SELECT * FROM requests WHERE user_id = ? ORDER BY id DESC";
    db.query(sql, [user_id], (err, results) => {
      if (err) {
        console.error("❌ Error fetching user requests:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json(results);
    });
  });

  // ✅ Update request status (Admin approval/rejection)
  router.put("/requests/:id", (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid or missing status" });
    }

    const sql = "UPDATE requests SET status = ? WHERE id = ?";
    db.query(sql, [status, id], (err) => {
      if (err) {
        console.error("❌ Error updating status:", err);
        return res.status(500).json({ message: "Server error" });
      }
      res.json({ message: "✅ Status updated" });
    });
  });
  // ✅ Assign volunteer to request
router.put("/requests/:id/assign", (req, res) => {
  const { volunteer_id } = req.body;
  const { id } = req.params;

  if (!volunteer_id) {
    return res.status(400).json({ message: "Missing volunteer_id" });
  }

  const sql = "UPDATE requests SET volunteer_id = ? WHERE id = ?";
  db.query(sql, [volunteer_id, id], (err) => {
    if (err) {
      console.error("❌ Error assigning volunteer:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.json({ message: "✅ Volunteer assigned" });
  });
});


  return router;
}
