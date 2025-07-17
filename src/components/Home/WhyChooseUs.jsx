import React from "react";
import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
  FaStar,
  FaTags,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-4xl text-[var(--primary-color)]" />,
    title: "Fast & Free Shipping",
    desc: "Get your orders delivered quickly and without extra cost.",
  },
  {
    icon: <FaUndo className="text-4xl text-green-600" />,
    title: "Easy Returns",
    desc: "7-day hassle-free returns with no questions asked.",
  },
  {
    icon: <FaLock className="text-4xl text-red-500" />,
    title: "Secure Payments",
    desc: "Your transactions are encrypted and safe with us.",
  },
  {
    icon: <FaHeadset className="text-4xl text-indigo-600" />,
    title: "24/7 Support",
    desc: "We’re available round-the-clock to help you anytime.",
  },
  {
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: "Verified Sellers",
    desc: "Only trusted sellers with quality products onboard.",
  },
  {
    icon: <FaTags className="text-4xl text-pink-500" />,
    title: "Exciting Deals",
    desc: "Best discounts every day just for you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-14 bg-[var(--text-dark-light)] text-gray-800">
      {/* 💬 Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-color)] mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Discover the benefits of shopping with us — a trusted, customer-first
          platform.
        </p>
      </div>

      {/* 🔥 Grid Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-100 bg-[var(--bg-color)] hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 text-center">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
