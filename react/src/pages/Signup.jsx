import React from "react";
import { Mail, Lock, User } from "lucide-react";

const Signuppage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#12121c] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl text-white">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <p className="text-center text-gray-300 mb-8">
          Join us and start your journey
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Name Field */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#4F6BFF] hover:bg-[#3e56d9] transition-all py-3 rounded-xl font-semibold mt-4 shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/loginpage" className="text-[#4F6BFF] cursor-pointer hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
