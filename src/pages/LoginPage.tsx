import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 text-center font-semibold text-lg">
        CREAVATION LLP
      </header>

      {/* Main Section */}
      <main className="flex flex-1 flex-col md:flex-row items-center justify-center p-6 bg-gray-50">
        {/* Left Illustration */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
            alt="Illustration"
            className="max-w-md w-full h-auto"
          />
        </div>

        {/* Right Login Box */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Company */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Company</label>
              <input
                type="text"
                value="CREAVA"
                disabled
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
              />
            </div>

            {/* Login As */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Login As</label>
              <input
                type="text"
                value="User"
                disabled
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                User Name *
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-1">
                Password *
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-xs py-2 px-4 text-center">
        Developed by Creavation LLP (I) Pvt. Ltd. (2001-2025) | SpineHRX-SpinePayroll
        <br />
        <a href="#" className="underline">User Agreement</a> |{" "}
        <a href="#" className="underline">Privacy Policy</a> |{" "}
        <a href="#" className="underline">Disclaimer</a>
      </footer>
    </div>
  );
};

export default LoginPage;
