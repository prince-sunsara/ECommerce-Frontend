import { POLICY_SECTIONS, getPlicyContent } from "../utils/constants.js";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--primary-bg)] text-[var(--text-light)] font-sans scroll-smooth">
      {/* ---------- Header Section ---------- */}
      <header className="w-full h-[220px] sm:h-[280px] md:h-[320px] bg-[var(--hero-bg)] flex items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden shadow ">
        <div className="absolute inset-0 bg-gradient-radial from-[var(--primary-hover)]/20 via-transparent to-transparent animate-pulse" />
        <div className="z-10 group duration-200 hover:scale-[1.03]">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-3 animate-pulse drop-shadow">
            🔐
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[var(--highlight-color)]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light font-['Inter'] text-[var(--text-dark-light)] hover:text-[var(--link-hover)] transition duration-300">
            Understand how we collect, use, and protect your personal
            information.
          </p>
          <div className="mt-4 w-20 h-[3px] bg-[var(--highlight-color)] rounded-full transition-all duration-500 hover:w-36 hover:bg-[var(--link-hover)] mx-auto" />
        </div>
      </header>

      {/* ---------- Table of Contents ---------- */}
      <div className="block md:hidden max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-[var(--input-bg)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2 border-[var(--border-color)] text-[var(--highlight-color)] font-serif">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {POLICY_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-3 py-2 rounded-md text-[var(--text-light)] hover:bg-[var(--primary-hover)] hover:text-[var(--highlight-color)] hover:font-semibold hover:pl-8 hover:border-l-4 hover:border-[var(--highlight-color)] transition-all duration-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Main Content Layout (Sidebar + Content) ---------- */}
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 py-10 gap-10">
        {/* Sidebar for Large Screens */}
        <aside className="hidden md:block md:w-1/4 sticky top-24 h-fit bg-[var(--input-bg)] p-5 rounded-xl border border-[var(--border-color)] shadow-sm">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2 border-[var(--border-color)] text-[var(--highlight-color)] font-serif">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {POLICY_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-3 py-2 rounded-md text-[var(--text-light)] hover:bg-[var(--primary-hover)] hover:text-[var(--highlight-color)] hover:font-semibold hover:pl-8 hover:border-l-4 hover:border-[var(--highlight-color)] transition-all duration-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Section */}
        <section className="w-full md:w-3/4 space-y-10">
          {POLICY_SECTIONS.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-[var(--input-bg)] rounded-xl p-5 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 border-b pb-1 border-[var(--border-color)] text-[var(--highlight-color)] font-['Playfair_Display'] group-hover:text-[var(--link-hover)] transition-all">
                {section.label}
              </h3>
              <p className="leading-relaxed text-justify text-[15px] sm:text-[16px] text-[var(--text-dark-light)] tracking-wide font-['Poppins'] group-hover:text-[var(--highlight-color)] transition-all">
                {getPlicyContent(section.id)}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
