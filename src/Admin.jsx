import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "flynetadmin") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setError("");
      Swal.fire({
        title: "🎉 Login Success!",
        text: "Welcome, Admin!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {!isAuthenticated ? (
        <div className="flex items-center justify-center w-full max-w-xl p-10 bg-black bg-opacity-80 rounded-xl shadow-lg">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Admin Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="text-lg font-bold text-white block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200 text-white bg-black bg-opacity-70"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 font-semibold bg-gradient-to-r from-black via-orange-700 to-black text-white rounded-lg shadow-md hover:from-orange-700 hover:via-black hover:to-orange-700 transition-all duration-1000"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-12 bg-gradient-to-r from-indigo-500 rounded-xl shadow-2xl w-full max-w-4xl mx-auto relative">
          <div className="absolute top-6 right-6">
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          </div>
          <h2 className="text-4xl font-semibold text-center text-white mb-6 pt-14 md:pt-0">
            Welcome, Admin!
          </h2>
          <p className="text-center text-lg text-white mb-8">
            You are now logged in and redirected to the Admin Dashboard.
          </p>
          <div className="mt-8 bg-gray-600 p-8 rounded-lg shadow-xl border-2 border-indigo-600">
            <h3 className="text-2xl font-semibold text-indigo-100 mb-6">
              Admin Dashboard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Link to="/create">
                <button className="w-full font-semibold text-2xl italic font-mono py-4 bg-gradient-to-r from-black via-orange-700 to-black text-white rounded-md shadow-md hover:from-orange-700 hover:via-black hover:to-orange-700 transition-all duration-300">
                  Create Post
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
