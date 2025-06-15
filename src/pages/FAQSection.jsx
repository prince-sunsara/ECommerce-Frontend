import { useState } from "react";
import { Search } from "lucide-react";
import { FAQ_DATA as faqData } from "../utils/constants";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#1B182F] text-white min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          How can we help you?
        </h1>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-[#2F2E41] border border-[#3D3C50] text-white placeholder-[#9A99A9] py-3 px-4 pl-10 rounded-2xl focus:outline-none"
          />
          <Search className="absolute left-3 top-3 text-[#9A99A9]" size={20} />
        </div>

        <div className="flex justify-between border-b border-[#3D3C50] mb-6">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`sm:flex-1 text-center py-3 font-medium border-b-2 transition duration-200 cursor-pointer ${
                activeTab === tab
                  ? "border-[#7D5FFF] text-[#7D5FFF]"
                  : "border-transparent text-[#B3B3C1] hover:text-white"
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

        <div className="bg-[#2A293D] rounded-2xl divide-y divide-[#3D3C50] overflow-hidden">
          {faqData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer px-5 py-4 hover:bg-[#2F2E41] transition duration-200"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-base">{item.question}</h3>
                <span className="text-[#7D5FFF] font-bold text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <p className="text-sm text-[#B3B3C1] mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
