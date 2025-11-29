import React from "react";
import { LogOut } from "lucide-react";

const Logoutpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#12121c] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl text-white text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-4 rounded-full border border-white/20">
            <LogOut className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">You're Logging Out</h2>

        <p className="text-gray-300 mb-8">
          Are you sure you want to logout from your account?
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            className="w-full bg-red-500 hover:bg-red-600 transition-all py-3 rounded-xl font-semibold shadow-lg"
          >
            Yes, Logout
          </button>

          <a
            href="/home"
            className="block w-full text-center bg-white/10 hover:bg-white/20 transition-all py-3 rounded-xl font-semibold shadow-inner border border-white/20"
          >
            Cancel
          </a>
        </div>

      </div>
    </div>
  );
};

export default Logoutpage;
