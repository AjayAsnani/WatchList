import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleLogin = () => {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("");
      onLogin(email);
    } else {
      alert("Please enter a valid email address");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to <span className="text-red-500">WatchLists</span>{" "}
        </h1>
        <p className="mb-4 text-center">
          Please enter your email to <span className="text-red-500">Login</span>
        </p>

        <input
          type="email"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-red-400 text-white px-4 py-2 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4">
          <Link to="/signup" className="text-blue-500">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
