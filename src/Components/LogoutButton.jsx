import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
