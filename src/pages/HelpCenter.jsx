// src/components/HelpCenter.jsx
import {
  Search,
  User,
  Mail,
  Smartphone,
  Users,
  Repeat2,
  Truck,
  CreditCard,
  PackageCheck,
  Workflow,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router";

const helpTopics = [
  {
    icon: <User className="h-8 w-8 text-[#7D5FFF]" />,
    title: "My Account",
    description: "Manage account settings, login issues, and security.",
  },
  {
    icon: <Mail className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Orders & Tracking",
    description: "Track orders, view history, and resolve issues.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Mobile App Support",
    description: "Get help using our mobile app on Android & iOS.",
  },
  {
    icon: <Truck className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Shipping & Delivery",
    description: "Understand shipping timelines, delays, and carriers.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Payments & Refunds",
    description:
      "Get assistance with payments, refunds, and failed transactions.",
  },
  {
    icon: <PackageCheck className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Product Returns",
    description: "Return or exchange products easily with our policy.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Membership & Rewards",
    description: "Learn about our loyalty programs and member benefits.",
  },
  {
    icon: <Workflow className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Technical Support",
    description: "Having technical difficulties? We're here to help.",
  },
  {
    icon: <HelpCircle className="h-8 w-8 text-[#7D5FFF]" />,
    title: "FAQs & General Help",
    description: "Browse frequently asked questions across categories.",
  },
  {
    icon: <Repeat2 className="h-8 w-8 text-[#7D5FFF]" />,
    title: "Subscription & Auto-Renew",
    description: "Manage your subscriptions and auto-renew preferences.",
  },
];

export default function HelpCenter() {
  return (
    <section className="min-h-screen bg-[#1C1B2A] text-white px-4 py-10 sm:px-10">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">We're here to help</h2>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-10 rounded-full bg-[#2F2E41] border border-[#3D3C50] placeholder-[#9A99A9] text-[#FFFFFF] focus:outline-none"
          />
          <Search className="absolute left-3 top-3.5 text-[#9A99A9] w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {helpTopics.map((topic, index) => (
          <Link
            to={topic.title}
            key={index}
            className="bg-[#2F2E41] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#3D3C50] hover:border-[#7D5FFF] cursor-pointer"
          >
            <div className="mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#FFFFFF]">
              {topic.title}
            </h3>
            <p className="text-[#B3B3C1] text-sm">{topic.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
