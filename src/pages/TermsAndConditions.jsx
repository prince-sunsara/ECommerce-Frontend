import termsBg from "../assets/images/terms_and_conditions.png";
//  Section data for sidebar and content
const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "eligibility", label: "Eligibility to Use" },
  { id: "account", label: "Account Responsibilities" },
  { id: "orders", label: "Orders & Payments" },
  { id: "returns", label: "Returns & Refunds" },
  { id: "pricing", label: "Pricing & Availability" },
  { id: "usage", label: "Acceptable Usage" },
  { id: "termination", label: "Termination" },
  { id: "disclaimer", label: "Disclaimer of Liability" },
  { id: "contact", label: "Contact Us" },
];
const getSectionContent = (id) => {
  switch (id) {
    case "introduction":
      return "Please read these terms carefully before using our platform.           Bycontinuing, you agree to be bound by these terms. These Terms & Conditions govern your access to and use of our eCommerce platform, including browsing, purchasing, and account management. By accessing or using our services, you agree to be legally bound by these terms.";
    case "eligibility":
      return "Users must be at least 18 years of age or have legal parental/guardian consent to use this site. We reserve the right to deny service to anyone at our discretion.";
    case "account":
      return "You are responsible for maintaining the confidentiality of your account login and for all activities that occur under your account. Notify us immediately of any unauthorized use.";
    case "orders":
      return "All orders placed are subject to availability and acceptance. Prices, product descriptions, and availability are subject to change without notice.";
    case "returns":
      return "You may return most new, unopened items within 7 days of delivery for a full refund. Items must be in original packaging. Return shipping costs may apply.";
    case "pricing":
      return "We strive to provide accurate pricing, but errors may occur. If a product is listed at an incorrect price, we reserve the right to refuse or cancel any orders placed.";
    case "usage":
      return "You agree not to use our services for any illegal activities, distribute harmful content, or engage in fraudulent behavior. Violations will result in account suspension.";
    case "termination":
      return "We may terminate or suspend access to our services immediately, without prior notice or liability, for any breach of these Terms.";
    case "disclaimer":
      return "Our site and services are provided 'as is' without warranties of any kind. We are not liable for any damages resulting from the use or inability to use our platform.";
    case "contact":
      return "For any questions regarding these terms, please contact us at support@ecommerce.com or call +1 (800) 456-7890.";
    default:
      return "";
  }
};

// 🔷 Main Component
const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header
        className="w-full h-[125px] sm:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center shadow"
        style={{
          backgroundImage: `url(${termsBg})`,
        }}
      ></header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-10">
        {/* Left Sidebar Table of Contents */}
        <aside className="md:w-1/4 sticky top-24 h-fit bg-gray-50 p-5 rounded-xl border border-gray-300 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800 font-medium transition"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Side Section Content */}
        <section className="md:w-3/4 space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h3 className="text-2xl font-bold text-blue-800 mb-3 border-b pb-1 border-blue-200">
                {section.label}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {getSectionContent(section.id)}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

// 🔹 Section Content Handler

export default TermsAndConditions;
