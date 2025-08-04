// /client/src/pages/Login.jsx

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // ✅ Save token and role in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // ✅ Redirect based on role
      const role = res.data.role;
      if (role === "admin") navigate("/admin-dashboard");
      else if (role === "volunteer") navigate("/volunteer-dashboard");
      else navigate("/user-dashboard");
    } catch (err) {
      alert("❌ Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-16 p-4 border  shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <button type="submit" className="bg-white text-black  px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  );
}
