import { useState } from "react";
import SellerDashboard from "./SellerDashboard";
import SellsProducts from "./SellsProducts";
import SellsOrders from "./SellsOrders";
import SellsProfile from "./SellsProfile";
import SellsSettings from "./SellsSettings";
import SellsCustomers from "./SellsCustomers";
import SellsAnalytics from "./SellsAnalytics";

const SellerMenuList = [
  "dashboard",
  "products",
  "orders",
  "customers",
  "analytics",
  "profile",
  "settings",
];

const pageComponents = {
  dashboard: SellerDashboard,
  products: SellsProducts,
  orders: SellsOrders,
  customers: SellsCustomers,
  analytics: SellsAnalytics,
  profile: SellsProfile,
  settings: SellsSettings,
};

const SellerPanel = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const ActivePageComponent = pageComponents[activePage];

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--text-light)] min-h-screen w-full">
      {/* Top Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 p-6 bg-[var(--hero-bg)] border-b border-[var(--border-color)]">
        {SellerMenuList.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-4 py-2 rounded-lg font-medium capitalize border transition-all duration-200 cursor-pointer
              ${
                activePage === page
                  ? "bg-[var(--primary-color)] text-[var(--button-text-color)]"
                  : "border-[var(--primary-color)] hover:bg-[var(--primary-hover)] hover:text-[var(--button-text-color)] text-white"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <main className="p-6 space-y-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--highlight-color)] capitalize">
          {activePage}
        </h2>
        <ActivePageComponent />
      </main>
    </div>
  );
};

export default SellerPanel;
