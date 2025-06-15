import PrivacyBg from "../assets/images/privacy-policy.png";
// Table of content sections
const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "dataCollection", label: "Data Collection" },
  { id: "dataUsage", label: "Use of Data" },
  { id: "cookies", label: "Cookies Policy" },
  { id: "thirdParties", label: "Third-Party Sharing" },
  { id: "security", label: "Data Security" },
  { id: "rights", label: "Your Rights" },
  { id: "changes", label: "Policy Changes" },
  { id: "contact", label: "Contact Us" },
];

// Reusable function for realistic content
const getSectionContent = (id) => {
  switch (id) {
    case "introduction":
      return "Your privacy matters to us. Here's how we collect, use, and protect your data. This Privacy Policy outlines how we handle your data when you use our platform. We are committed to protecting your personal information.";
    case "dataCollection":
      return "We collect data such as name, email, phone number, and address during registration or while using our services.";
    case "dataUsage":
      return "Your data is used to provide better service, process transactions, and personalize your experience.";
    case "cookies":
      return "We use cookies to improve site functionality and enhance user experience. You can manage cookie preferences in your browser.";
    case "thirdParties":
      return "We may share minimal data with third-party partners only for payment, shipping, or analytics — always under strict agreements.";
    case "security":
      return "We implement encryption and secure servers to keep your personal data safe from unauthorized access.";
    case "rights":
      return "You have the right to access, modify, or delete your data anytime. Contact our support team for assistance.";
    case "changes":
      return "We may update this policy periodically. All changes will be reflected on this page with a revision date.";
    case "contact":
      return "For questions, please contact us at privacy@ecommerce.com or call +1 (800) 123-4567.";
    default:
      return "";
  }
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <header
        className="w-full h-[125px] sm:h-[400px] lg:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center shadow"
        style={{ backgroundImage: `url(${PrivacyBg})` }}
      ></header>

      {/* Main Layout */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-12 gap-10">
        {/* Sidebar with table of contents */}
        <aside className="md:w-1/4 sticky top-24 h-fit bg-gray-100 p-5 rounded-xl border border-gray-300 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Section content on the right */}
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

export default PrivacyPolicy;
