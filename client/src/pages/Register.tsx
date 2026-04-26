import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Register | Flow";
  }, []);

  const register = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.message === "User created") {
      alert("Registered successfully!");
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="p-20 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl mb-4">Register</h1>

        <input
          className="mb-2 w-72 p-2 bg-gray-100"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="mb-7 w-72 p-2 bg-gray-100"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-green-500 text-white w-72 py-2 cursor-pointer"
          onClick={register}
        >
          Register
        </button>

        <p
          className="mt-4 text-sm text-blue-400 underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          Already have an account? Login here
        </p>
      </div>
    </div>
  );
}
