import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | Flow";

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-900 text-white">
      <h1 className="text-3xl mb-4">Welcome! 🎉 Logged in</h1>

      <button className="bg-red-500 px-6 py-2 rounded" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
