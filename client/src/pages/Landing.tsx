import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/flow-logo.png";
import arrow from "../assets/getstarted-arrow.png";
import bg from "../assets/landing-bg.png";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Flow";
  }, []);

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Navigation Bar */}
        <div className="pt-11 animate-fadeIn [animation-delay:200ms]">
          <nav className="sticky top-0 z-50 w-[45%] mx-auto flex items-center justify-between px-4 py-1.5 bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] rounded-[20px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 object-contain cursor-pointer"
              />
              <span className="text-[16px] text-[rgba(0,136,255,1)] font-bold">
                FLOW
              </span>
            </div>

            <ul className="flex gap-6 font-[Poppins] font-medium text-[rgba(60,60,60,1)] text-[14px]">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Workflow</a>
              </li>
              <li>
                <a href="#">Preview</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>

            {/* Sign In Button */}
            <button
              className="bg-[rgba(0,136,255,1)] px-5.5 py-1.75 rounded-[13px] text-[rgba(255,255,255,1)] text-[14px] cursor-pointer"
              onClick={login}
            >
              Sign In
            </button>
          </nav>
        </div>

        {/* Welcome */}
        <div className="pt-20.5 flex justify-center animate-fadeIn [animation-delay:200ms]">
          <p className="bg-[rgba(255,255,255,1)] text-[rgba(60,60,60,1)] text-[14px] px-14.5 py-1.5 rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            Welcome to Flow
          </p>
        </div>

        {/* Heading */}
        <div className="text-center mt-11 px-4 animate-fadeIn [animation-delay:200ms]">
          <h1 className="text-[rgba(0,0,0,1)] text-7xl font-semibold leading-[1.2]">
            Start Building{" "}
            <span className="bg-linear-to-r from-[rgba(0,140,255,1)] via-[rgba(0,140,255,1)] to-[rgba(95,183,255,1)] bg-clip-text text-transparent">
              Better
              <br /> Habits
            </span>{" "}
            Today
          </h1>

          <p className="mt-7 text-[rgba(0,0,0,1)] text-[17.5px] max-w-4xl mx-auto">
            Flow brings your tasks and finances together in one focused
            system—so you can plan better, <br /> spend smarter, and stay
            consistent every day.
          </p>
        </div>

        {/* Get Started */}
        <div className="pt-16 flex justify-center gap-6 animate-fadeIn [animation-delay:200ms]">
          <button
            className="flex items-center gap-3 bg-[rgba(0,136,255,1)] text-[rgba(255,255,255,1)] text-[14.5px] px-10 py-2 rounded-[13px] shadow-[0_6px_6px_-6px_rgba(0,0,0,0.5)] cursor-pointer"
            onClick={register}
          >
            Get Started
            <img src={arrow} alt="arrow" className="w-3 h-4" />
          </button>

          <button
            className="bg-[rgba(255,255,255,1)] text-[rgba(0,136,255,1)] text-[14.5px] px-13 py-2 rounded-[13px] shadow-[0_6px_6px_-6px_rgba(0,0,0,0.2)] cursor-pointer border border-[rgba(229,229,234,1)]"
            onClick={register}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
