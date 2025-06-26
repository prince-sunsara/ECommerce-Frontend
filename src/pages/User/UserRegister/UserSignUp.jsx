import signUpBg from "../../../assets/images/login-signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "../../../context/FormContext";
import { useState } from "react";
import axios from "axios";
import StatusModal from "../../../components/StatusModal";

// Font Awesome for eye icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function UserSignUp() {
  const navigate = useNavigate();
  const { formData, updateFormData, clearFormData } = useFormContext();

  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
    buttonText: "Ok",
    callback: () => {},
  });

  const handleClick = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "email" || name === "username" || name === "phone"
        ? value.toLowerCase().trim()
        : value;
    updateFormData(name, formattedValue);
  };

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, username, phone, email, password } = formData;

    const phoneRegex = /^\d{10}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !username?.trim() ||
      !phone?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      setError("All fields are required!");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (!agreeTerms) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }

    const fullForm = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.trim().toLowerCase(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    try {
      const response = await axios.post("/api/v1/users/register", fullForm, {
        withCredentials: true,
      });
      if (response.data.success) {
        setModal({
          isOpen: true,
          type: "success",
          title: "Oh Yeah!",
          message: "You have successfully registered.",
          buttonText: "Ok",
          callback: () => navigate("/user-login"),
        });
      }
    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Signup Failed!",
        message: err?.response?.data?.message || "Something went wrong",
        buttonText: "Ok",
        callback: () => {},
      });
    }

    clearFormData();
    setAgreeTerms(true);
    setError("");
  };

  return (
    <div className="min-h-screen flex justify-center flex-col md:flex-row bg-[var(--primary-bg)] text-white font-inter">
      {/* Left Side */}
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

      {/* Right Side */}
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

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username || ""}
              onChange={handleChange}
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              maxLength={10}
              value={formData.phone || ""}
              onChange={handleChange}
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              required
              className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />

            {/* Password with show/hide icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                required
                className="bg-[var(--input-bg)] rounded-md px-4 py-3 w-full text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] pr-12"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-[var(--text-light)] hover:text-white"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <label className="flex items-center space-x-3 text-sm text-[var(--text-light)]">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={handleCheckboxChange}
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

          <div className="flex items-center my-8 space-x-4">
            <hr className="flex-grow border-[var(--border-color)]" />
            <span className="text-xs text-[var(--highlight-color)] whitespace-nowrap">
              Or sign up via
            </span>
            <hr className="flex-grow border-[var(--border-color)]" />
          </div>

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

      <StatusModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        buttonText={modal.buttonText}
        onClose={() => {
          setModal({ ...modal, isOpen: false });
          modal.callback?.();
        }}
      />
    </div>
  );
}
