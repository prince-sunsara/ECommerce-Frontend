import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const SellerDashboard = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");

  const recentOrders = [
    {
      id: "ORD123",
      customer: "Rahul",
      date: "2025-06-20",
      total: 2599,
      status: "New",
    },
    {
      id: "ORD124",
      customer: "Priya",
      date: "2025-06-21",
      total: 5499,
      status: "Shipped",
    },
    {
      id: "ORD125",
      customer: "Amit",
      date: "2025-06-22",
      total: 1899,
      status: "Pending",
    },
  ];

  const salesData = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    sales: Math.floor(Math.random() * 8000 + 1000),
  }));

  const filteredOrders =
    orderStatusFilter === "all"
      ? recentOrders
      : recentOrders.filter((o) => o.status === orderStatusFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-10"
    >
      {/* Overview KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["Total Sales", "New Orders", "Revenue", "Active Products"].map(
          (title, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl shadow-md hover:shadow-2xl transition-all"
            >
              <h3 className="text-lg font-semibold mb-2 text-[var(--highlight-color)]">
                {title}
              </h3>
              <p className="text-[var(--text-dark-light)] text-2xl">
                ₹ {Math.floor(Math.random() * 90000 + 10000)}
              </p>
            </motion.div>
          )
        )}
      </section>

      {/* Quick Actions */}
      <section className="flex gap-4 flex-wrap">
        <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] px-5 py-3 rounded-lg font-medium shadow">
          ➕ Add Product
        </button>
        <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] px-5 py-3 rounded-lg font-medium shadow">
          📦 View Orders
        </button>
      </section>

      {/* Sales Chart */}
      <section className="bg-[var(--input-bg)] p-6 rounded-lg border border-[var(--border-color)] shadow-md">
        <h3 className="text-xl font-semibold text-[var(--highlight-color)] mb-4">
          Sales Trends (Last 30 Days)
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#3D3C50" />
              <XAxis dataKey="day" stroke="#B3B3C1" fontSize={12} />
              <YAxis stroke="#B3B3C1" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2F2E41",
                  borderColor: "#3D3C50",
                }}
                labelStyle={{ color: "#B3B3C1" }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#7D5FFF"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Order Management */}
      <section>
        <h3 className="text-xl font-semibold text-[var(--highlight-color)] mb-4">
          Recent Orders
        </h3>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-4">
          {["all", "New", "Shipped", "Pending"].map((status) => (
            <button
              key={status}
              onClick={() => setOrderStatusFilter(status)}
              className={`px-4 py-2 rounded-md font-medium text-sm border transition-all
                ${
                  orderStatusFilter === status
                    ? "bg-[var(--primary-color)] text-[var(--button-text-color)]"
                    : "border-[var(--primary-color)] text-white hover:bg-[var(--primary-hover)] hover:text-[var(--button-text-color)]"
                }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="overflow-auto">
          <table className="w-full text-sm text-left text-[var(--text-dark-light)]">
            <thead className="bg-[var(--primary-bg)] text-[var(--highlight-color)]">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--border-color)] hover:bg-[var(--hero-bg)]"
                >
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.customer}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">₹{order.total}</td>
                  <td className="px-4 py-2">{order.status}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-sm text-blue-400 hover:underline">
                      View
                    </button>
                    <button className="text-sm text-green-400 hover:underline">
                      Mark Shipped
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Summary */}
      <section>
        <h3 className="text-xl font-semibold text-[var(--highlight-color)] mb-4">
          Recent Products
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[var(--input-bg)] p-4 rounded-lg border border-[var(--border-color)]"
            >
              <div className="aspect-square bg-[var(--hero-bg)] rounded-lg overflow-hidden mb-3">
                <img
                  src={`https://source.unsplash.com/400x400/?product,tech,${i}`}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">
                Product #{i}
              </h4>
              <p className="text-[var(--text-dark-light)]">
                Stock: {20 + i * 3}
              </p>
              <p className="text-[var(--text-dark-light)]">Price: ₹{i * 999}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] px-5 py-3 rounded-lg font-medium shadow">
            ➕ Add Product
          </button>
          <button className="border border-[var(--primary-color)] hover:bg-[var(--primary-hover)] hover:text-[var(--button-text-color)] text-white px-5 py-3 rounded-lg font-medium">
            🔍 View All Products
          </button>
        </div>
      </section>

      {/* Earnings Summary */}
      <section className="bg-[var(--input-bg)] p-6 rounded-lg border border-[var(--border-color)] shadow">
        <h3 className="text-xl font-semibold text-[var(--highlight-color)] mb-4">
          Earnings
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 text-[var(--text-dark-light)]">
          <div>
            <p className="text-white text-lg font-bold">₹ 15,300</p>
            <p>Current Balance</p>
          </div>
          <div>
            <p className="text-white text-lg font-bold">₹ 5,000</p>
            <p>Pending Payout</p>
          </div>
          <div>
            <p className="text-white text-lg font-bold">₹ 10,000</p>
            <p>Last Payout (June 15, 2025)</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SellerDashboard;
