import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import StatusModal from "../components/StatusModal";

export default function OtpVerification() {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
    buttonText: "Ok",
    callback: () => {},
  });

  const location = useLocation();
  const navigate = useNavigate();
  const formData = location?.state?.formData;

  useEffect(() => {
    if (!formData) navigate("/user-sign-up");
  }, [formData, navigate]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only 1 digit
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp(newOtp);
    inputsRef.current[5]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      return setModal({
        isOpen: true,
        type: "error",
        title: "Incomplete OTP",
        message: "Please enter the full 6-digit OTP.",
        buttonText: "Try Again",
        callback: () => {},
      });
    }

    try {
      const verifyRes = await axios.post("/api/v1/users/verify-otp", {
        email: formData.email,
        otp: enteredOtp,
      });

      if (verifyRes.data.success && location?.state?.reqestedFrom === "signup") {
        const registerRes = await axios.post("/api/v1/users/register", formData, {
          withCredentials: true,
        });

        if (registerRes.data.success) {
          return setModal({
            isOpen: true,
            type: "success",
            title: "Registration Successful",
            message: "Your account has been created!",
            buttonText: "Login",
            callback: () => navigate("/user-login"),
          });
        }
      }
    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Verification Failed",
        message: err?.response?.data?.message || "Invalid OTP or Server error.",
        buttonText: "Retry",
        callback: () => {},
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] text-white font-inter px-4">
      <div className="w-full max-w-md bg-[var(--primary-bg)] px-4 py-10 sm:px-8 md:px-10 border border-[var(--ring-color)] rounded-xl">
        <h1 className="text-3xl font-semibold mb-3 text-center">Verify OTP</h1>
        <p className="text-sm mb-6 text-center text-[var(--text-light)]">
          Enter the 6-digit code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className="flex justify-between max-w-sm mx-auto"
            onPaste={handlePaste}
          >
            {otp.map((value, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={value}
                placeholder="•"
                className="w-10 h-10 sm:w-14 sm:h-14 text-center text-xl rounded-md bg-[var(--input-bg)] text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] rounded-md py-3 text-lg font-normal hover:bg-[var(--primary-hover)] transition"
          >
            Verify OTP
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-[var(--text-light)]">
          Didn’t receive the code?{" "}
          <button
            onClick={async () => {
              await axios.post("/api/v1/users/send-otp", {
                email: formData?.email,
              });
              setModal({
                isOpen: true,
                type: "info",
                title: "OTP Sent",
                message: "A new OTP has been sent to your email.",
                buttonText: "Ok",
                callback: () => {},
              });
            }}
            className="text-white hover:underline"
          >
            Resend
          </button>
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
