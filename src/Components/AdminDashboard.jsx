
import React, { useEffect, useState } from "react";
import axios from "axios";
import LogoutButton from "./LogoutButton";

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  // ✅ Fetch all requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/requests");
      setRequests(res.data);
    } catch (err) {
      console.error("❌ Error fetching requests:", err);
    }
  };

  // ✅ Fetch all volunteers
  const fetchVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/volunteers");
      setVolunteers(res.data);
    } catch (err) {
      console.error("❌ Error fetching volunteers:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
    fetchVolunteers();
  }, []);

  // ✅ Approve or reject a request
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
      fetchRequests(); // Refresh after update
    } catch (err) {
      console.error("❌ Error updating status:", err);
    }
  };

  // ✅ Assign volunteer to a request
  const updateVolunteer = async (id, volunteer_id) => {
    try {
      await axios.put(`http://localhost:5000/api/requests/${id}/assign`, {
        volunteer_id,
      });
      fetchRequests(); // Refresh after assignment
    } catch (err) {
      console.error("❌ Error assigning volunteer:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">User ID</th>
              <th className="border p-2">Resource</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Volunteer</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id}>
                <td className="border p-2">{req.id}</td>
                <td className="border p-2">{req.user_id}</td>
                <td className="border p-2">{req.resource_type}</td>
                <td className="border p-2">{req.status}</td>
                <td className="border p-2">
                  {req.volunteer_id ? (
                    <>Volunteer #{req.volunteer_id}</>
                  ) : (
                    <select
                      onChange={(e) =>
                        updateVolunteer(req.id, e.target.value)
                      }
                      defaultValue=""
                      className="border rounded px-2 py-1 text-sm"
                    >
                      <option value="" disabled>
                        Assign Volunteer
                      </option>
                      {volunteers.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => updateStatus(req.id, "approved")}
                    className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(req.id, "rejected")}
                    className="bg-red-500 hover:bg-red-600 text-black px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
}
