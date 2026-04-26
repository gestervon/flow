import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Login | Flow";
  }, []);

  const login = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
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
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="p-20 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl mb-4">Login</h1>

        <input
          className="mb-2 rounded-md w-72 p-2 bg-gray-100"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="mb-7 rounded-md w-72 p-2 bg-gray-100"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 rounded-md text-white w-72 py-2 cursor-pointer"
          onClick={login}
        >
          Login
        </button>

        <p
          className="mt-4 text-sm text-blue-400 underline cursor-pointer"
          onClick={() => navigate("/register")}
        >
          No account? Register here
        </p>
      </div>
    </div>
  );
}
