import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // 🔥 Password match check
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/user/register", {
        name: name,
        email: email,
        password: password,
      });

      console.log("Signup Success:", response.data);

      alert("Account created successfully!");

      // 🔥 Redirect to Login page
      navigate("/loginpage");

    } catch (error) {
      console.error("Signup Error:", error.response?.data || error);
      alert("Signup failed! Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#12121c] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <p className="text-center text-gray-300 mb-8">
          Join us and start your journey
        </p>

        <form className="space-y-5" onSubmit={handleSignup}>

          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4F6BFF] hover:bg-[#3e56d9] transition-all py-3 rounded-xl font-semibold mt-4 shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/loginpage" className="text-[#4F6BFF] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signuppage;
