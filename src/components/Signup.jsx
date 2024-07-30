import { useState } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = (onSignup) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    onSignup(email);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ray-100">
      <div className="w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to <span className="text-red-500">WatchLists</span>{" "}
        </h1>
        <p className="mb-4 text-center">
          Please enter your email to{" "}
          <span className="text-red-500">Sign Up</span>
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
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <div className="mt-4">
          <Link to="/" className="text-blue-500">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
