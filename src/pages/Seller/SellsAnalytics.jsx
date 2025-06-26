import { useState } from "react";
import { motion } from "framer-motion";

const SellsAnalytics = () => {
  const [dateRange, setDateRange] = useState("Last 30 Days");

  const kpis = [
    {
      title: "Total Revenue",
      value: "₹1,25,000",
      change: "+12.5%",
      color: "text-green-400",
    },
    {
      title: "Total Orders",
      value: "340",
      change: "+8.1%",
      color: "text-green-400",
    },
    {
      title: "Avg Order Value",
      value: "₹367",
      change: "-2.3%",
      color: "text-red-400",
    },
    {
      title: "Product Views",
      value: "15,230",
      change: "+5.4%",
      color: "text-green-400",
    },
  ];

  const topProducts = [
    {
      name: "Wireless Headphones",
      sales: "₹32,000",
      units: 128,
      views: 2200,
    },
    {
      name: "Smartwatch Pro X",
      sales: "₹27,500",
      units: 110,
      views: 1900,
    },
    {
      name: "Gaming Mousepad",
      sales: "₹15,600",
      units: 156,
      views: 1000,
    },
  ];

  return (
    <div className="space-y-8 p-6 text-[var(--text-light)]">
      {/* Page Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl font-bold text-[var(--highlight-color)]">
          Analytics & Reports
        </h1>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="bg-[var(--input-bg)] border border-[var(--border-color)] text-white px-4 py-2 rounded-lg"
        >
          {["Today", "Last 7 Days", "Last 30 Days", "Custom Range"].map(
            (opt) => (
              <option key={opt}>{opt}</option>
            )
          )}
        </select>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-5 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl shadow-lg hover:shadow-xl"
          >
            <h4 className="text-[var(--text-dark-light)] mb-1">{kpi.title}</h4>
            <p className="text-xl font-bold text-white">{kpi.value}</p>
            <span className={`text-sm ${kpi.color}`}>
              {kpi.change} from previous
            </span>
          </motion.div>
        ))}
      </section>

      {/* Sales Chart */}
      <section className="bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[var(--highlight-color)]">
          Sales Trends
        </h2>
        <div className="h-64 flex items-center justify-center text-[var(--text-dark-light)] border border-dashed rounded-lg">
          {/* Replace below with Chart.js or Recharts <LineChart /> */}
          <p>📈 Chart integration placeholder (e.g., Line Chart for Sales)</p>
        </div>
      </section>

      {/* Product Performance Table */}
      <section className="bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-[var(--highlight-color)]">
          Top Selling Products
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[var(--text-dark-light)]">
                <th className="p-2">Product</th>
                <th className="p-2">Total Sales</th>
                <th className="p-2">Units Sold</th>
                <th className="p-2">Views</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, i) => (
                <tr
                  key={i}
                  className="border-t border-[var(--border-color)] hover:bg-[var(--hero-bg)]"
                >
                  <td className="p-2 text-white">{p.name}</td>
                  <td className="p-2">{p.sales}</td>
                  <td className="p-2">{p.units}</td>
                  <td className="p-2">{p.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4">
            <button className="text-[var(--highlight-color)] hover:underline text-sm">
              View All Product Reports →
            </button>
          </div>
        </div>
      </section>

      {/* Future Sections (placeholders) */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl p-6 text-[var(--text-dark-light)]">
          🌍 Geographic Sales placeholder
        </div>
        <div className="bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl p-6 text-[var(--text-dark-light)]">
          🔍 Traffic Sources placeholder
        </div>
      </section>
    </div>
  );
};

export default SellsAnalytics;
