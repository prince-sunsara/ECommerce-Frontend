import { motion } from "framer-motion";
import { Link } from "react-router";

const SellerLanding = () => {
  const categoryImages = {
    electronics: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    fashion: "https://images.unsplash.com/photo-1542068829-1115f7259450",
    furniture: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    books: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    beauty: "https://images.unsplash.com/photo-1500835556837-99ac94a94552",
    toys: "https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--text-light)] min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-[var(--hero-bg)]">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--highlight-color)] mb-4">
          Become a Seller on Our Platform
        </h1>
        <p className="text-[var(--text-dark-light)] text-lg max-w-2xl mb-6">
          Join a growing network of sellers and reach millions of customers with
          your products. We offer tools, support, and visibility to help your
          business grow fast.
        </p>
        <Link
          to="/seller-login"
          className="cursor-pointer px-8 py-3 text-lg font-medium rounded-lg bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] transition"
        >
          Start Selling Now
        </Link>

        <motion.img
          src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-xl shadow-2xl mt-12 w-full max-w-5xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Easy Setup",
            desc: "Start selling in minutes with our seamless onboarding.",
          },
          {
            title: "Analytics Dashboard",
            desc: "Track orders, revenue, and product performance easily.",
          },
          {
            title: "Wide Reach",
            desc: "Your products become visible to millions instantly.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-[var(--input-bg)] p-6 rounded-2xl shadow-lg border border-[var(--border-color)] transition-all"
          >
            <h3 className="text-xl font-semibold text-[var(--highlight-color)] mb-2">
              {feature.title}
            </h3>
            <p className="text-[var(--text-dark-light)]">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Visual Preview Section */}
      <section className="py-16 bg-[var(--primary-bg)] px-6">
        <h2 className="text-3xl text-center text-[var(--highlight-color)] font-bold mb-10">
          What You Can Sell
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.keys(categoryImages).map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateZ: 2, scale: 1.03 }}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)] bg-[var(--hero-bg)]"
            >
              <img
                src={categoryImages[cat]}
                alt={cat}
                className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-4">
                <h4 className="text-xl text-[var(--highlight-color)] font-semibold capitalize">
                  {cat}
                </h4>
                <p className="text-[var(--text-dark-light)] text-sm mt-1">
                  Sell high-quality {cat} products to a wide customer base.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-[var(--input-bg)] px-6">
        <h2 className="text-3xl md:text-4xl text-[var(--highlight-color)] font-bold mb-6">
          Ready to Join?
        </h2>
        <p className="text-[var(--text-dark-light)] mb-6 max-w-2xl mx-auto">
          Get access to powerful tools, dedicated support, and more by signing
          up as a seller today. Expand your reach and grow your brand.
        </p>
        <Link
          to="/seller-sign-up"
          className="cursor-pointer px-8 py-3 text-lg font-medium rounded-lg bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] transition"
        >
          Register as Seller
        </Link>
      </section>
    </div>
  );
};

export default SellerLanding;
