import { useState } from "react";
import { Search } from "lucide-react";
import { FAQ_DATA as faqData } from "../utils/constants";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[var(--hero-bg)] text-[var(--text-light)] min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          How can we help you?
        </h1>

        {/* Search Input */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] py-3 px-4 pl-10 rounded-2xl focus:outline-none"
          />
          <Search
            className="absolute left-3 top-3 text-[var(--text-dark-light)]"
            size={20}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-between border-b border-[var(--border-color)] mb-6 flex-wrap">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`sm:flex-1 text-center py-3 font-medium border-b-2 transition duration-200 cursor-pointer ${
                activeTab === tab
                  ? "border-[var(--primary-color)] text-[var(--primary-color)]"
                  : "border-transparent text-[var(--text-dark-light)] hover:text-[var(--text-light)]"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="bg-[var(--hero-bg)] rounded-2xl divide-y divide-[var(--border-color)] overflow-hidden">
          {faqData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer px-5 py-4 hover:bg-[var(--input-bg)] transition duration-200"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-base">{item.question}</h3>
                <span className="text-[var(--highlight-color)] font-bold text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <p className="text-sm text-[var(--text-dark-light)] mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
