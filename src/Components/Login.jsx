import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!name || !email || !password) {
      setFormError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setFormError("");
      return;
    }

    setEmailError("");
    setFormError("");
    setUser({ name, email });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your PopX account</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(validateEmail(e.target.value) ? "" : "Please enter a valid email address.");
            }}
            className={`mt-1 w-full border ${emailError ? "border-red-500" : "border-gray-300"} rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-purple-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg font-semibold text-white transition bg-purple-600 hover:bg-purple-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
