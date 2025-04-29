import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="h-screen flex flex-col justify-end md:justify-center items-center bg-gray-50 p-6">
      {/* Content Section */}
      <div className="w-full max-w-sm md:max-w-lg text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover the
          best way to manage your projects and collaborate with your team.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/signup">
            <button className="w-full md:w-auto bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 outline-none">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full md:w-auto bg-purple-200 text-purple-800 py-2 px-4 rounded-lg font-medium hover:bg-purple-300 outline-none">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
