
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VolunteerDashboard() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const res = await axios.get("http://localhost:5000/resources");
      setResources(res.data);
    } catch (err) {
      console.error("Failed to fetch resources:", err);
    }
  };

  return (
    
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Volunteer Dashboard</h1>
      <h2 className="text-lg font-semibold mb-2">Available Resources:</h2>

      {resources.length === 0 ? (
        <p className="text-gray-600">No resources available.</p>
      ) : (
        <ul className="space-y-2">
          {resources.map((res) => (
            <li key={res.id} className="border rounded p-3 shadow-sm bg-white">
              <p><strong>Name:</strong> {res.name}</p>
              <p><strong>Type:</strong> {res.type}</p>
              <p><strong>Quantity:</strong> {res.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    
    
  );
}
