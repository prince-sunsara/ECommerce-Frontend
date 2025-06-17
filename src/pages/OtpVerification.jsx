import { useRef } from "react";

export default function OtpVerification() {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow digits

    // Move to next input if value is filled
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] text-white font-inter px-4">
      <div className="w-full max-w-md bg-[var(--primary-bg)] px-4 py-10 sm:px-8 md:px-10 border border-[var(--ring-color)] rounded-xl">
        <h1 className="text-white text-3xl font-semibold mb-3 text-center">
          Verify OTP
        </h1>
        <p className="text-[var(--text-light)] text-sm mb-6 text-center">
          Enter the 6-digit code sent to your email/phone.
        </p>

        <form className="space-y-6">
          <div className="flex justify-between max-w-sm mx-auto">
            {Array.from({ length: 6 }).map((_, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                maxLength={1}
                inputMode="numeric"
                className="w-10 h-10 sm:w-14 sm:h-14 text-center text-xl rounded-md bg-[var(--input-bg)] text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="•"
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] rounded-md py-3 text-white text-lg font-normal hover:bg-[var(--primary-hover)] transition cursor-pointer"
          >
            Verify OTP
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-[var(--text-light)]">
          Didn’t receive the code?{" "}
          <a href="#" className="text-white hover:underline">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
}
