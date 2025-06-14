import React from 'react';

export default function OtpVerification() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--primary-bg)] text-white font-inter px-4">
      <div className="w-full max-w-md bg-[var(--primary-bg)] px-6 py-12 sm:px-10 md:px-12 lg:px-14 border-1 border-white rounded-xl">
        <h1 className="text-white text-3xl font-semibold mb-3 text-center">Verify OTP</h1>
        <p className="text-[var(--text-light)] text-sm mb-6 text-center">
          Enter the 6-digit code sent to your email/phone.
        </p>

        <form className="space-y-6">
          <div className="flex justify-between space-x-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <input
                key={idx}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-xl rounded-md bg-[var(--input-bg)] text-white placeholder-[#cfcfe3] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
                placeholder="•"
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
          Didn’t receive the code?{' '}
          <a href="#" className="text-white hover:underline">
            Resend
          </a>
        </div>
      </div>
    </div>
  );
}
