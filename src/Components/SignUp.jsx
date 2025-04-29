import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const InputField = ({ label, required = false, placeholder = "", value, onChange, error }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-purple-600 mb-1">
      {label} {required && "*"}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border ${error ? "border-red-500" : "border-gray-300"} rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [formError, setFormError] = useState("");

  const handleSignup = () => {
    if (!name || !email || !phone || !password || !company) {
      setFormError("All fields are required.");
      return;
    }

    setFormError("");
    setUser({ name, email });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-purple-100 p-10">
        <h1 className="text-4xl font-bold text-purple-600 text-center">
          Join PopX Today
        </h1>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Create your PopX account
          </h2>

          {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}

          <InputField
            label="Full Name"
            required
            placeholder="Marry Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!name && formError}
          />
          <InputField
            label="Email address"
            required
            placeholder="marry@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!email && formError}
          />
          <InputField
            label="Phone number"
            required
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!phone && formError}
          />
          <InputField
            label="Password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!password && formError}
          />
          <InputField
            label="Company name"
            required
            placeholder="PopX Technologies"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            error={!company && formError}
          />

          <div className="mb-6">
            <p className="text-sm font-medium text-purple-600 mb-2">
              Are you an Agency? *
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="agency" className="accent-purple-600" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="agency" className="accent-purple-600" />
                No
              </label>
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
