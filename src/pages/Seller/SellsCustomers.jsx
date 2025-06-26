import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaEnvelope, FaEye } from "react-icons/fa";

const SellsCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Placeholder mock data
    setCustomers([
      {
        id: 1,
        name: "Amit Kumar",
        email: "amit@example.com",
        totalOrders: 12,
        totalSpent: 9540,
        lastOrderDate: "2024-06-22",
      },
      {
        id: 2,
        name: "Priya Singh",
        email: "priya@example.com",
        totalOrders: 3,
        totalSpent: 2340,
        lastOrderDate: "2024-06-12",
      },
      {
        id: 3,
        name: "Ravi Patel",
        email: "ravi@example.com",
        totalOrders: 9,
        totalSpent: 7010,
        lastOrderDate: "2024-06-18",
      },
    ]);
  }, []);

  const filteredCustomers = customers
    .filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((c) => {
      if (filter === "highSpenders") return c.totalSpent > 5000;
      if (filter === "repeat") return c.totalOrders > 5;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "orders") return b.totalOrders - a.totalOrders;
      if (sortBy === "spent") return b.totalSpent - a.totalSpent;
      if (sortBy === "date")
        return new Date(b.lastOrderDate) - new Date(a.lastOrderDate);
    });

  return (
    <div className="p-6 max-w-7xl mx-auto text-[var(--text-light)]">
      <h1 className="text-3xl font-bold text-[var(--highlight-color)] mb-6">
        My Customers
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 bg-[var(--input-bg)] p-2 px-4 rounded-lg border border-[var(--border-color)]">
          <FaSearch className="text-[var(--text-dark-light)]" />
          <input
            type="text"
            placeholder="Search by name or email"
            className="bg-transparent focus:outline-none w-full text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <select
            className="p-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="repeat">Repeat Customers</option>
            <option value="highSpenders">High Spenders</option>
          </select>

          <select
            className="p-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="orders">Sort by Orders</option>
            <option value="spent">Sort by Spend</option>
            <option value="date">Sort by Last Order</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[var(--input-bg)] p-4 rounded-xl shadow border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-dark-light)]">
            Total Customers
          </p>
          <h3 className="text-xl font-semibold">{customers.length}</h3>
        </div>
        <div className="bg-[var(--input-bg)] p-4 rounded-xl shadow border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-dark-light)]">
            Repeat Customers
          </p>
          <h3 className="text-xl font-semibold">
            {customers.filter((c) => c.totalOrders > 5).length}
          </h3>
        </div>
        <div className="bg-[var(--input-bg)] p-4 rounded-xl shadow border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-dark-light)]">Avg. Spend</p>
          <h3 className="text-xl font-semibold">
            ₹
            {Math.floor(
              customers.reduce((sum, c) => sum + c.totalSpent, 0) /
                customers.length
            ) || 0}
          </h3>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden">
          <thead className="text-left text-[var(--highlight-color)] text-sm uppercase border-b border-[var(--border-color)]">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Orders</th>
              <th className="px-4 py-2">Spent</th>
              <th className="px-4 py-2">Last Order</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredCustomers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-[var(--text-dark-light)] p-6"
                >
                  No customers found.
                </td>
              </tr>
            ) : (
              filteredCustomers.map((cust) => (
                <tr
                  key={cust.id}
                  className="border-b border-[var(--border-color)] hover:bg-[var(--primary-bg)]"
                >
                  <td className="px-4 py-3 font-medium text-[var(--highlight-color)]">
                    {cust.name}
                  </td>
                  <td className="px-4 py-3">{cust.email}</td>
                  <td className="px-4 py-3">{cust.totalOrders}</td>
                  <td className="px-4 py-3">₹{cust.totalSpent}</td>
                  <td className="px-4 py-3">{cust.lastOrderDate}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <button className="text-[var(--highlight-color)] hover:underline text-sm flex items-center gap-1">
                      <FaEye /> View
                    </button>
                    <button className="text-[var(--highlight-color)] hover:underline text-sm flex items-center gap-1">
                      <FaEnvelope /> Message
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellsCustomers;
