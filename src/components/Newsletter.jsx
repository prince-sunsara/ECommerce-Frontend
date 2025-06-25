import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-indigo-50 text-center py-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Subscribe to our Newsletter
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Get updates on latest products & offers
      </p>
      <form className="flex justify-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full sm:w-auto border rounded-full focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
