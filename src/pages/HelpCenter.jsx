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
    icon: <User className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "My Account",
    description: "Manage account settings, login issues, and security.",
  },
  {
    icon: <Mail className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Orders & Tracking",
    description: "Track orders, view history, and resolve issues.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Mobile App Support",
    description: "Get help using our mobile app on Android & iOS.",
  },
  {
    icon: <Truck className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Shipping & Delivery",
    description: "Understand shipping timelines, delays, and carriers.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Payments & Refunds",
    description:
      "Get assistance with payments, refunds, and failed transactions.",
  },
  {
    icon: <PackageCheck className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Product Returns",
    description: "Return or exchange products easily with our policy.",
  },
  {
    icon: <Users className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Membership & Rewards",
    description: "Learn about our loyalty programs and member benefits.",
  },
  {
    icon: <Workflow className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Technical Support",
    description: "Having technical difficulties? We're here to help.",
  },
  {
    icon: <HelpCircle className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "FAQs & General Help",
    description: "Browse frequently asked questions across categories.",
  },
  {
    icon: <Repeat2 className="h-8 w-8 text-[var(--primary-color)]" />,
    title: "Subscription & Auto-Renew",
    description: "Manage your subscriptions and auto-renew preferences.",
  },
];

export default function HelpCenter() {
  return (
    <section className="min-h-screen bg-[var(--hero-bg)] text-[var(--text-light)] px-4 py-10 sm:px-10">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">We're here to help</h2>

        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-10 rounded-full bg-[var(--input-bg)] border border-[var(--border-color)] placeholder-[var(--text-dark-light)] text-[var(--text-light)] focus:outline-none"
          />
          <Search className="absolute left-3 top-3.5 text-[var(--text-dark-light)] w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {helpTopics.map((topic, index) => (
          <Link
            to={topic.title}
            key={index}
            className="bg-[var(--input-bg)] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[var(--border-color)] hover:border-[var(--primary-color)] cursor-pointer"
          >
            <div className="mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--text-light)]">
              {topic.title}
            </h3>
            <p className="text-[var(--text-dark-light)] text-sm">
              {topic.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
