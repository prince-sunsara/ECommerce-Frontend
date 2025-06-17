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
    { href: FB_LINK, icon: <FaFacebookF size={16} /> },
    { href: INSTAGRAM_LINK, icon: <FaInstagram size={16} /> },
    { href: TWITTER_LINK, icon: <FaTwitter size={16} /> },
    { href: PINTEREST_LINK, icon: <FaPinterestP size={16} /> },
  ];

  return (
    <footer className="bg-[var(--primary-bg)] text-[var(--text-light)] px-6 pt-10 pb-6 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[var(--border-color)] pb-8 mb-10 gap-6">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-color)] text-center md:text-left">
            Join our mailing list & get exclusive offers
          </h3>
          <form className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-dark-light)]" />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-[var(--primary-color)] text-[var(--button-text-color)] font-semibold border border-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">
              ECommerce
            </h1>
            <p className="text-[var(--text-dark-light)] mb-4 leading-relaxed">
              Elevate your everyday shopping with premium products and fast delivery.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-[var(--text-dark-light)]">
                <FaPhoneAlt className="text-[var(--primary-color)]" />
                {COMPANY_PHONE}
              </p>
              <p className="flex items-center gap-2 text-[var(--text-dark-light)]">
                <FaEnvelope className="text-[var(--primary-color)]" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-[var(--primary-color)] transition"
                >
                  {COMPANY_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--highlight-color)] mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 3).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[var(--primary-color)] transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--highlight-color)] mb-3">
              Support
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(3, 6).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[var(--primary-color)] transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--highlight-color)] mb-3">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-[var(--primary-color)] rounded-full hover:bg-[var(--primary-color)] hover:text-[var(--button-text-color)] transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[var(--border-color)] mt-10 pt-4 text-center text-[var(--text-dark-light)] text-xs">
          {COPY_RIGHT}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
