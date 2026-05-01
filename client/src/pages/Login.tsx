import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Sign In | Flow";
  }, []);

  const login = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Sign in failed");
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      {/* Left Side Design */}
      <div>hahahah</div>

      {/* Login Form */}
      <div className="flex items-center justify-center animate-fadeIn">
        <div className="p-20 shadow-lg flex flex-col items-start bg-[rgba(255,255,255,0.5)] rounded-[30px]">
          <h2 className="text-[rgba(0,136,255,1)] text-[18px] font-medium mb-1">
            Welcome to Flow
          </h2>
          <h1 className="text-[24px] font-semibold mb-4">
            Sign in your account
          </h1>

          <label>Email Address</label>
          <input
            className="mb-2 rounded-md w-72 p-2 bg-gray-100"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            className="mb-7 rounded-md w-72 p-2 bg-gray-100"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p
            className="text-sm text-blue-400 cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>

          <button
            className="bg-blue-500 rounded-md text-white w-72 py-2 cursor-pointer"
            onClick={login}
          >
            Sign In
          </button>

          <p className="mt-4 text-sm text-blue-400">
            Don't have an account?
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
