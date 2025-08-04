import React, { useEffect, useState } from 'react';

const ResourcesList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/resources') // Backend endpoint
      .then((res) => res.json())
      .then((data) => {
        setResources(data);
      })
      .catch((err) => {
        console.error('Failed to fetch resources:', err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Resources</h2>
      {resources.length > 0 ? (
        <ul className="space-y-2">
          {resources.map((item) => (
            <li key={item.id} className="border p-2 rounded shadow">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Type:</strong> {item.type}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No resources available.</p>
      )}
    </div>
  );
};

export default ResourcesList;
