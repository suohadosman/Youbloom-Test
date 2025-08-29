import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { validatePhone } from "../utils/validators"; 

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/"); 
    }
  }, [navigate]);

  const handleChange = (e) => {
    setPhone(e.target.value);
    setError("");
    setSuccess("");
  };

  const submit = (e) => {
    e.preventDefault();
    const { valid, error } = validatePhone(phone);
    if (!valid) {
      setError(error);
      return;
    }

    const res = login(phone);
    if (res.ok) {
      localStorage.setItem("phone", phone);
      localStorage.setItem("isLoggedIn", "true");
      setSuccess("Login successful!");
      setTimeout(() => navigate("/"));
    } else {
      setError("Invalid phone number");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 max-w-md w-full border border-gray-200 transform transition-transform duration-500 hover:scale-105">
        <div className="flex justify-center mb-6">
          <img src="/Youbloom_logo.png" alt="Youbloom" className="h-20" />
        </div>

        <h1 className="text-2xl font-bold text-center mb-6 text-[#5A1F2A] tracking-tight">
          Welcome to Youbloom
        </h1>

        <form onSubmit={submit} className="space-y-5">
          <div className="relative">
            <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-[#ba1615]
                         text-gray-900 placeholder-gray-500 font-medium"
              placeholder="Enter your number"
              value={phone}
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
          {success && <p className="text-green-600 text-sm font-medium">{success}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#ba1615] to-[#700e0f] 
                       text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out
                       transform hover:-translate-y-0.5 hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
