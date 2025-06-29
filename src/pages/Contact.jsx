const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-[var(--hero-bg)] text-[var(--text-light)] font-sans ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-[var(--hero-bg)]/80 h-full backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Let’s Talk About Your Needs
        </h1>
        <p className="text-[var(--text-dark-light)] max-w-lg mb-6 text-lg">
          Whether you have questions about our products, shipping, or want a
          personalized solution, we’re here to help. Drop your details and we’ll
          reach out within 24 hours.
        </p>
        <ul className="mb-6 text-[var(--text-dark-light)] space-y-2">
          <li>
            <strong>Email:</strong> support@ecommerce.com
          </li>
          <li>
            <strong>Phone:</strong> +91 ***** *****
          </li>
          <li>
            <strong>Address:</strong> 101 Ecom Street, Mumbai, India
          </li>
        </ul>

        <div className="flex space-x-4 text-xl mt-4">
          <a href="#">
            <i className="fab fa-twitter hover:text-[#1DA1F2]"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook hover:text-[#1877F2]"></i>
          </a>
          <a href="#">
            <i className="fab fa-google hover:text-[#DB4437]"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram hover:text-[#E1306C]"></i>
          </a>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-[var(--input-bg)] p-10 rounded-md shadow-md max-w-lg">
        <h2 className="text-2xl font-bold mb-1">Get a Quote</h2>
        <p className="text-[var(--text-dark-light)] mb-6">
          Our experts will respond within 24 hours.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[var(--hero-bg)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[var(--hero-bg)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Email"
              className="bg-[var(--hero-bg)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[var(--hero-bg)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] w-full px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            />
          </div>

          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="bg-[var(--hero-bg)] text-[var(--text-light)] placeholder-[var(--text-dark-light)] w-full px-4 py-3 rounded-md resize-none outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          ></textarea>

          <button
            type="submit"
            className="bg-[var(--primary-color)] text-[var(--button-text-color)] w-full py-3 rounded-md font-medium hover:bg-[var(--primary-hover)] transition"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
