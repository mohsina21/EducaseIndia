import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-end justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/signup">
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg mb-2 font-medium hover:bg-purple-700">
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-purple-200 text-purple-800 py-2 rounded-lg font-medium">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
