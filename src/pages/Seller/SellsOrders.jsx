import { useEffect, useState } from "react";
import { FaSearch, FaEye, FaPrint, FaTruck } from "react-icons/fa";

const SellsOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    setOrders([
      {
        id: "ORD12345",
        customer: "Amit Kumar",
        date: "2024-06-25",
        total: 4499,
        paymentStatus: "Paid",
        fulfillmentStatus: "Processing",
      },
      {
        id: "ORD12346",
        customer: "Priya Singh",
        date: "2024-06-24",
        total: 5999,
        paymentStatus: "Pending",
        fulfillmentStatus: "New",
      },
      {
        id: "ORD12347",
        customer: "Ravi Patel",
        date: "2024-06-22",
        total: 2399,
        paymentStatus: "Paid",
        fulfillmentStatus: "Shipped",
      },
    ]);
  }, []);

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 rounded-full text-xs font-medium";
    const map = {
      New: "bg-yellow-600 text-white",
      Processing: "bg-orange-500 text-white",
      Shipped: "bg-blue-500 text-white",
      Delivered: "bg-green-500 text-white",
      Cancelled: "bg-red-500 text-white",
    };
    return `${base} ${map[status] || "bg-gray-500 text-white"}`;
  };

  const filteredOrders = orders
    .filter((order) => {
      const query = searchQuery.toLowerCase();
      return (
        order.id.toLowerCase().includes(query) ||
        order.customer.toLowerCase().includes(query)
      );
    })
    .filter((order) =>
      statusFilter === "All" ? true : order.fulfillmentStatus === statusFilter
    )
    .filter((order) =>
      paymentFilter === "All" ? true : order.paymentStatus === paymentFilter
    )
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "amount") return b.total - a.total;
      return 0;
    });

  return (
    <div className="p-6 max-w-7xl mx-auto text-[var(--text-light)]">
      <h1 className="text-3xl font-bold text-[var(--highlight-color)] mb-6">
        My Orders
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 bg-[var(--input-bg)] p-2 px-4 rounded-lg border border-[var(--border-color)]">
          <FaSearch className="text-[var(--text-dark-light)]" />
          <input
            type="text"
            placeholder="Search by order ID or customer"
            className="bg-transparent focus:outline-none w-full text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            className="p-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>New</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          <select
            className="p-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)]"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>

          <select
            className="p-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
      </div>

      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-[var(--input-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden">
          <thead className="text-left text-[var(--highlight-color)] text-sm uppercase border-b border-[var(--border-color)]">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Payment</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredOrders.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center text-[var(--text-dark-light)] p-6"
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-[var(--border-color)] hover:bg-[var(--primary-bg)]"
                >
                  <td className="px-4 py-3 font-medium text-[var(--highlight-color)]">
                    {order.id}
                  </td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">₹{order.total}</td>
                  <td className="px-4 py-3">{order.paymentStatus}</td>
                  <td className="px-4 py-3">
                    <span className={getStatusBadge(order.fulfillmentStatus)}>
                      {order.fulfillmentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <button className="text-[var(--highlight-color)] hover:underline text-sm flex items-center gap-1">
                      <FaEye /> View
                    </button>
                    <button className="text-[var(--highlight-color)] hover:underline text-sm flex items-center gap-1">
                      <FaPrint /> Label
                    </button>
                    <button className="text-[var(--highlight-color)] hover:underline text-sm flex items-center gap-1">
                      <FaTruck /> Ship
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

export default SellsOrders;
