import React, { useState } from "react";
// import Image from "/images/login/login.png";
// import Facebook from "/images/login/facebookIcon.png";
// import Google from "/images/login/googleIcon.png";
// import Apple from "/images/login/appleIcon.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-400 px-4">
      <h3
        className="
    absolute top-6 left-1/2 transform -translate-x-1/2
    text-white font-semibold
    text-lg sm:text-2xl md:text-3xl lg:text-4xl
    text-center
  "
      >
        Logo Business Name
      </h3>

      <div className="bg-gradient-to-t from-[#FFFFFF] to-[#999999] bg-opacity-80 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={Image} className="w-14 h-13" />
        </div>

        <h2 className="text-4xl font-bold text-center mb-6">Log In</h2>

        {/* Form */}
        <form
          className="space-y-4 flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();

            if (!validatePassword(password)) {
              setError(
                "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
              );
              return;
            }

            setError("");

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          <div className="bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-70 items-center">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-8 bg-left text-black bg-[url('/images/login/userIcon.png')] bg-no-repeat py-1 pr-4 border-white rounded-md"
            />
          </div>

          <div className="relative bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg w-70">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-8 bg-left text-black bg-[url('/images/login/passwordIcon.png')] bg-no-repeat py-1 pr-6 border-white rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.507.036-1.006.104-1.493M9.05 9.05A3 3 0 1115 15M21 21L3 3"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.394 1.356-1.09 2.597-2.012 3.627M15 12a3 3 0 01-6 0"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="relative w-32 bg-[#10B981] text-black font-bold py-1 width-16 rounded-md hover:bg-green-400 justify-center"
          >
            Log In
          </button>
        </form>

        <div className="text-center text-black font-semibold mt-4">
          or login with
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <button className="bg-gray-300 px-8 rounded-lg hover:bg-gray-200">
            <img src="" alt="Google" className="w-4 h-4 items-center" />
          </button>
          <button className="bg-gray-300 px-8 rounded-lg hover:bg-gray-200">
            <img src="" alt="Facebook" className="w-4 h-4" />
          </button>
          <button className="bg-gray-300 px-8 py-2 rounded-lg hover:bg-gray-200">
            <img src="" alt="Apple" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute top-6 left-6 text-white text-sm md:text-base flex gap-2 items-center">
        <span className="font-bold uppercase">Logo</span>
        <span className="uppercase">Business Name</span>
      </div>
    </div>
  );
}

export default Login;
