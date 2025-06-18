import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import {
  COPY_RIGHT,
  FB_LINK,
  INSTAGRAM_LINK,
  TWITTER_LINK,
  PINTEREST_LINK,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  NAV_LINKS,
} from "../utils/constants";

const Footer = () => {
  const socialLinks = [
    { href: FB_LINK, icon: <FaFacebookF size={18} /> },
    { href: INSTAGRAM_LINK, icon: <FaInstagram size={18} /> },
    { href: TWITTER_LINK, icon: <FaTwitter size={18} /> },
    { href: PINTEREST_LINK, icon: <FaPinterestP size={18} /> },
  ];

  return (
    <footer className="bg-[var(--primary-bg)] text-[var(--text-light)] px-6 pt-10 pb-6 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto w-full">
        {/* ================== Newsletter Section ================== */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-[var(--border-color)] pb-8 mb-8">
          <div className="text-[var(--text-light)] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <h3 className="text-xl font-semibold text-[var(--highlight-color)] font-serif">
                Join our mailing list & get exclusive offers and updates
              </h3>
              <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="relative w-full">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 ">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-transparent border border-[var(--text-light)]  text-[var(--text-light)] focus:outline-none hover:border-[var(--border-bg)]  transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-3 rounded-full bg-[var(--highlight-color)]  font-medium border  hover:border-[var(--text-light)] border-[var(--highlight-color)] hover:bg-[var(--primary-bg)] text-[var(--button-text-color)] hover:text-[var(--text-light)] transition-all duration-300 cursor-pointer"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================== Footer Content ================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* ----- Company Info ----- */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-[var(--highlight-color)]">
              E-Commerce
            </h1>
            <p className="text-[var(--text-dark-light)] mb-4">
              Experience fast delivery, unbeatable prices, and the widest range.
            </p>
            <p className="text-[var(--text-dark-light)] flex items-center gap-2 mb-1 ">
              <FaPhoneAlt className="text-[var(--text-dark-light)]" />
              {COMPANY_PHONE}
            </p>
            <p className="text-[var(--text-dark-light)] hover:text-[--link-hover] flex items-center gap-2">
              <FaEnvelope className="text-[var(--text-dark-light)]" />
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="hover:underline text-[var(--text-dark-light)] hover:text-[var(--link-hover)] transition"
              >
                {COMPANY_EMAIL}
              </a>
            </p>
          </div>

          {/* ----- Quick Links ----- */}
          <div className="space-y-2">
            <h5 className="text-[var(--highlight-color)] text-xl font-semibold mb-3">
              Quick Links
            </h5>
            {NAV_LINKS.slice(0, 3).map((item) => (
              <p
                key={item.path}
                className="text-[var(--text-dark-light)] group transition-all duration-200"
              >
                <Link
                  to={item.path}
                  className="hover:text-[var(--primary-color)] inline-block pl-0 group-hover:pl-3 transition-all duration-200 before:content-[''] group-hover:before:content-['—'] before:mr-1"
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>

          {/* ----- Support Links ----- */}
          <div className="space-y-2 text-gray-400">
            <h5 className="text-[var(--highlight-color)] text-xl font-semibold mb-3">
              Support Links
            </h5>
            {NAV_LINKS.slice(3, 6).map((item) => (
              <p
                key={item.path}
                className=" text-[var(--text-dark-light)] group transition-all duration-200"
              >
                <Link
                  to={item.path}
                  className="hover:text-[var(--primary-color)] inline-block pl-0 group-hover:pl-3 transition-all duration-200 before:content-[''] group-hover:before:content-['—'] before:mr-1"
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>

        {/* ================== Bottom Footer Bar ================== */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--border-color)] mt-10 pt-6  text-[var(--text-dark-light)]  text-sm">
          <p className="text-center md:text-left">{COPY_RIGHT}</p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--input-bg)] border  border-[var(--text-light)] rounded-full p-3 hover:bg-[var(--highlight-color)] hover:animate-pulse  transition-all duration-300 group  hover:scale-110 hover:shadow-[0_0_15px_var(--highlight-color)]"
              >
                <span className="text-[var(--text-light)] group-hover:text-[var(--button-text-color)] transition-colors duration-300">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
