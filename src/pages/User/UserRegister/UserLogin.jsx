import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Make sure you're using react-router-dom not react-router
import loginBg from "../../../assets/images/login-signup.png";
import { useFormContext } from "../../../context/formContext";

export default function UserLogin() {
  const navigate = useNavigate();
  const { formData, updateFormData, clearFormData } = useFormContext();
  const [showPassword, setShowPassword] = useState(false); // toggle for password

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Login Success:", formData);
      clearFormData();
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--primary-bg)] text-white font-inter justify-center">
      {/* Left image side */}
      <div className="hidden md:flex md:w-1/2 relative flex-col justify-between">
        <div className="p-8 pt-6 flex justify-between items-center z-10">
          <div className="w-[200px] h-[30px] flex items-center justify-center">
            <h1 className="text-white text-3xl font-semibold tracking-wide select-none">
              ECOMMERCE
            </h1>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="px-4 py-1.5 bg-[var(--primary-color)] rounded-md text-white text-sm font-normal hover:bg-[var(--primary-hover)] transition flex items-center w-max cursor-pointer"
          >
            Back to website
          </button>
        </div>
        <img
          alt="Login background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          src={loginBg}
          width="600"
          height="900"
        />
      </div>

      {/* Right form side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:px-12 md:px-20 lg:px-24 bg-[var(--primary-bg)]">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl font-semibold mb-3 leading-tight">
            Login to your account
          </h1>
          <p className="text-[var(--text-light)] text-sm mb-6">
            Don’t have an account?{" "}
            <Link
              to="/user-sign-up"
              className="text-white hover:underline font-normal"
            >
              Sign Up
            </Link>
          </p>

          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={handleChange}
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 text-white placeholder-[#cfcfe3] w-full focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password || ""}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 pr-12 text-white placeholder-[#cfcfe3] w-full focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-[#cfcfe3] hover:text-white cursor-pointer"
              >
                <i className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>

            <label className="flex items-center space-x-3 text-[var(--text-light)] text-sm">
              <input
                type="checkbox"
                required
                defaultChecked
                className="w-5 h-5 rounded border-none bg-white text-[var(--primary-bg)] cursor-pointer"
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="underline hover:text-[var(--link-hover)]"
                >
                  Terms &amp; Conditions
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] rounded-md py-3 text-white text-lg font-normal hover:bg-[var(--primary-hover)] transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-8 space-x-4">
            <hr className="flex-grow border-[var(--border-color)]" />
            <span className="text-[var(--highlight-color)] text-xs whitespace-nowrap">
              Or login with
            </span>
            <hr className="flex-grow border-[var(--border-color)]" />
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://storage.googleapis.com/a1aa/image/c754ac72-6d4f-49d9-de94-826702f3bc3f.jpg"
                alt="Google logo"
                className="w-5 h-5"
              />
              <span className="text-white text-sm font-normal">Google</span>
            </button>
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="Apple logo"
                className="w-5 h-5"
              />
              <span className="text-white text-sm font-normal">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
