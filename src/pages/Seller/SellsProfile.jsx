import { motion } from "framer-motion";

const SellsProfile = () => {
  const seller = {
    name: "Prince Sunsara",
    email: "prince@example.com",
    phone: "+91 9876543210",
    store: "Panda Cart",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    joined: "March 2024",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[var(--input-bg)] p-8 rounded-xl border border-[var(--border-color)] space-y-6 max-w-3xl mx-auto shadow-lg"
    >
      <div className="flex items-center gap-6 mb-6">
        <img
          src={seller.avatar}
          alt={seller.name}
          className="w-24 h-24 rounded-full border-4 border-[var(--highlight-color)] shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-white">{seller.name}</h3>
          <p className="text-[var(--text-dark-light)]">{seller.email}</p>
          <p className="text-sm text-[var(--highlight-color)]">
            Joined: {seller.joined}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--primary-bg)] rounded-lg p-4 border border-[var(--border-color)]">
          <h4 className="text-lg font-medium text-[var(--highlight-color)] mb-2">
            Personal Details
          </h4>
          <p className="text-[var(--text-dark-light)]">
            Full Name: <span className="text-white">{seller.name}</span>
          </p>
          <p className="text-[var(--text-dark-light)]">
            Email: <span className="text-white">{seller.email}</span>
          </p>
          <p className="text-[var(--text-dark-light)]">
            Phone: <span className="text-white">{seller.phone}</span>
          </p>
        </div>

        <div className="bg-[var(--primary-bg)] rounded-lg p-4 border border-[var(--border-color)]">
          <h4 className="text-lg font-medium text-[var(--highlight-color)] mb-2">
            Store Info
          </h4>
          <p className="text-[var(--text-dark-light)]">
            Store Name: <span className="text-white">{seller.store}</span>
          </p>
          <p className="text-[var(--text-dark-light)]">
            Store Category:{" "}
            <span className="text-white">Fashion & Electronics</span>
          </p>
          <p className="text-[var(--text-dark-light)]">
            Status: <span className="text-green-400 font-semibold">Active</span>
          </p>
        </div>
      </div>

      <div className="pt-4 text-center">
        <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300">
          Edit Profile
        </button>
      </div>
    </motion.div>
  );
};

export default SellsProfile;
