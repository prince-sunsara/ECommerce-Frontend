import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 🚀 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    if (!isValid) {
      alert("Please enter a valid email address.");
      return;
    }

    // 📨 Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="bg-[var(--bg-color)] border-t border-gray-100 py-14 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* 🔔 Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--primary-color)] mb-2">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Get the latest deals, updates, and exclusive offers — straight to your
          inbox.
        </p>

        {/* 📬 Email Input & Submit Button */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-xl mx-auto">
              <div className="flex w-full shadow-md hover:shadow-lg transition duration-300 rounded-full">
                {/* 📧 Email Icon inside input */}
                <div className="relative w-full">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-l-full border border-gray-300 bg-[var(--bg-color)] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition"
                  />
                </div>

                {/* ✅ Submit Button */}
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold rounded-r-full bg-[var(--ring-color)] border border-l-0 border-gray-300 text-gray-800 hover:bg-[var(--primary-hover)] hover:text-white transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        ) : (
          // 🎉 Success Message
          <p className="text-green-600 font-medium mt-6 text-sm sm:text-base">
            🎉 Thanks! You’re subscribed to our updates.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
