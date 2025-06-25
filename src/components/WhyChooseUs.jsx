import React from "react";
import { FaShippingFast, FaUndoAlt, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: <FaShippingFast />, label: "Free Delivery" },
  { icon: <FaUndoAlt />, label: "Easy Returns" },
  { icon: <FaShieldAlt />, label: "Secure Payments" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-4 border-t">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Why Shop With Us
      </h2>
      <div className="flex justify-around text-center gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-gray-700 hover:text-indigo-600 transition"
          >
            <div className="text-3xl mb-2">{f.icon}</div>
            <p className="text-sm font-medium">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
