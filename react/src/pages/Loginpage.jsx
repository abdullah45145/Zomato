import React, { useState } from "react";
import axios from "axios";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // <-- for redirect

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });

      console.log("Login Success:", response.data);

      // OPTIONAL: Save token in localStorage
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // 🔥 Redirect to Home page
      navigate("/");

    } catch (error) {
      console.error("Login Error:", error.response?.data || error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#12121c] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-8">Login to your account</p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 mt-1">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                id="email"
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
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none px-3 py-3 text-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4F6BFF] hover:bg-[#3e56d9] transition-all py-3 rounded-xl font-semibold mt-4 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/Signup" className="text-[#4F6BFF] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
