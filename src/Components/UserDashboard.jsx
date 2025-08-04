
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutButton from "./LogoutButton";

export default function UserDashboard() {
  const [resourceType, setResourceType] = useState("");
  const [requests, setRequests] = useState([]);
  const userId = 3; // 🔧 Replace with dynamic ID if needed later

  // ✅ Submit new resource request
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/requests", {
        user_id: userId,
        resource_type: resourceType,
      });

      alert("✅ Request submitted!");
      setResourceType("");
      fetchRequests(); // refresh list
    } catch (error) {
      console.error("❌ Submit Error:", error);
      alert("❌ Failed to submit request");
    }
  };

  // ✅ Fetch previous requests for this user
  const fetchRequests = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/requests/${userId}`);
      setRequests(response.data);
    } catch (error) {
      console.error("❌ Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Request Resource</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter resource type"
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded">
          Submit Request
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Your Previous Requests</h3>
      <ul className="border p-3 rounded bg-gray-50">
        {requests.length === 0 ? (
          <li>No requests yet.</li>
        ) : (
          requests.map((req) => (
            <li key={req.id} className="mb-2">
              🔹 {req.resource_type} — <strong>{req.status}</strong>
            </li>
          ))
        )}
      </ul>

      <LogoutButton />
    </div>
  );
}
