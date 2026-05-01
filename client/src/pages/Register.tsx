import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    document.title = "Sign Up | Flow";
  }, []);

  const register = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password, confirm }),
    });

    const data = await res.json();

    if (data.message === "User created") {
      alert("Signed up successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="p-20 rounded-lg shadow-lg flex flex-col items-center">
        <h2>Welcome to Flow</h2>
        <h1 className="text-2xl mb-4">Create your account</h1>

        <label>Full Name</label>
        <input
          className="mb-2 w-72 p-2 bg-gray-100"
          placeholder="Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />

        <label>Email Address</label>
        <input
          className="mb-2 w-72 p-2 bg-gray-100"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="mb-7 w-72 p-2 bg-gray-100"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          className="mb-7 w-72 p-2 bg-gray-100"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          className="bg-green-500 text-white w-72 py-2 cursor-pointer"
          onClick={register}
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-blue-400">
          Already have an account?
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
