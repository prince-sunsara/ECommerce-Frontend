import signUpBg from "../../../assets/images/login-signup.png";
import { Link, useNavigate } from "react-router";
export default function UserSignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigates to home page
  };

  return (
    <div className="min-h-screen flex justify-center flex-col md:flex-row bg-[var(--primary-bg)] text-white font-inter">
      {/* Left side image (hidden on small screens) */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img
          src={signUpBg}
          alt="Sign up background"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        />
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <div className="text-2xl font-semibold">ECOMMERCE</div>
          <button
            type="button"
            onClick={handleClick}
            className="px-4 py-2 bg-[var(--primary-color)] rounded-md text-white text-sm hover:bg-[var(--primary-hover)] transition"
          >
            Back to website
          </button>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-6 md:py-12 sm:px-8 md:px-12 lg:px-20 xl:px-24 bg-[var(--primary-bg)]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
            Create an account
          </h1>
          <p className="text-sm text-[var(--text-light)] mb-6">
            Already have an account?{" "}
            <Link to="/user-login" className="text-white hover:underline">
              Login
            </Link>
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="First name"
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] flex-1 md:w-1/2"
              />
              <input
                type="text"
                placeholder="Last name"
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] flex-1 md:w-1/2"
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <input
              type="tel"
              placeholder="Phone number"
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 pr-12 text-white placeholder-[#cfcfe3] w-full focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-[#cfcfe3] hover:text-white"
                tabIndex={-1}
              >
                <i className="far fa-eye"></i>
              </button>
            </div>

            <label className="flex items-center space-x-3 text-sm text-[var(--text-light)]">
              <input
                type="checkbox"
                required
                defaultChecked
                className="w-5 h-5 rounded bg-white text-[var(--primary-bg)]"
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="underline hover:text-[var(--link-hover)]"
                >
                  Terms & Conditions
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] rounded-md py-3 text-white text-lg hover:bg-[var(--primary-hover)] transition"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 space-x-4">
            <hr className="flex-grow border-[var(--border-color)]" />
            <span className="text-xs text-[var(--highlight-color)] whitespace-nowrap">
              Or sign up via
            </span>
            <hr className="flex-grow border-[var(--border-color)]" />
          </div>

          {/* Social buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://storage.googleapis.com/a1aa/image/c754ac72-6d4f-49d9-de94-826702f3bc3f.jpg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm text-white">Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center space-x-2 border border-[var(--border-color)] rounded-md py-3 px-6 w-full hover:border-[var(--ring-color)] transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                alt="Apple"
                className="w-5 h-5"
              />
              <span className="text-sm text-white">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
