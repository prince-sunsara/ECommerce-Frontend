import { Link } from "react-router";

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
    <footer className="bg-[#2B2A40] text-white px-6 py-10">
      <div className="container mx-auto px-5">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-white pb-6 mb-6">
          <div className=" text-white py-8 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <h3 className="text-2xl font-semibold">
                Join our mailing list & get exclusive offers and updates
              </h3>
              <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="relative w-full">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-transparent border border-white placeholder-white text-white focus:outline-none hover:border-[#7d5fff] focus:border-[#7d5fff] transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-3 rounded-full bg-[#7d5fff] text-white font-medium border border-[#7d5fff] hover:border-white  hover:bg-[#2B2A40] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Company Info */}
          <div>
            <h1 className="text-4xl font-bold mb-2">E-Commerce</h1>
            <p className="text-gray-400 mb-4">
              Experience fast delivery, unbeatable prices, and the widest range.
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaPhoneAlt className="text-white" />
              {COMPANY_PHONE}
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="hover:underline hover:text-white transition cursor-pointer"
              >
                majestoteam@.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-gray-400">
            <h5 className="text-white text-xl font-semibold mb-2">
              Quick Links
            </h5>
            {NAV_LINKS.slice(0, 3).map((item) => (
              <p key={item.path} className="group transition-all duration-200">
                <Link
                  to={item.path}
                  className="hover:text-[#7d5fff] inline-block pl-0 group-hover:pl-3 transition-all duration-200 before:content-[''] group-hover:before:content-['—'] before:mr-1 cursor-pointer"
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>

          {/* Support Links */}
          <div className="space-y-2 text-gray-400">
            <h5 className="text-white text-xl font-semibold mb-2">
              Support Links
            </h5>
            {NAV_LINKS.slice(3, 6).map((item) => (
              <p key={item.path} className="group transition-all duration-200">
                <Link
                  to={item.path}
                  className="hover:text-[#7d5fff] inline-block pl-0 group-hover:pl-3 transition-all duration-200 before:content-[''] group-hover:before:content-['—'] before:mr-1 cursor-pointer"
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white mt-6 pt-4 text-gray-500 text-sm">
          <p>{COPY_RIGHT}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2B2A40] border border-white rounded-full p-3 hover:bg-white transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-[#7d5fff] transition-colors duration-300">
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
