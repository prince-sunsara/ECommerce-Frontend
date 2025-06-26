import { useState } from "react";
import { FaEdit, FaTrash, FaClone } from "react-icons/fa";
import { FiSearch, FiPlus } from "react-icons/fi";

const SellsProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      sku: "WE-001",
      category: "Electronics",
      price: 1999,
      stock: 25,
      status: "Active",
      image: "https://source.unsplash.com/80x80/?earbuds",
    },
    {
      id: 2,
      name: "Casual Sneakers",
      sku: "CS-002",
      category: "Fashion",
      price: 2999,
      stock: 5,
      status: "Low Stock",
      image: "https://source.unsplash.com/80x80/?shoes",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      sku: "GM-003",
      category: "Electronics",
      price: 1499,
      stock: 0,
      status: "Out of Stock",
      image: "https://source.unsplash.com/80x80/?mouse",
    },
  ]);

  return (
    <div className="p-6 text-white bg-[var(--primary-bg)] min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-[var(--highlight-color)]">
          My Products
        </h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white px-4 py-2 rounded-md">
            <FiPlus /> Add New Product
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or SKU"
              className="bg-[var(--input-bg)] border border-[var(--border-color)] text-white pl-10 pr-4 py-2 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-[var(--text-dark-light)]" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[var(--secondary-bg)]">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">SKU</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price (₹)</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-[var(--border-color)] hover:bg-[var(--secondary-bg)]"
                >
                  <td className="p-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  </td>
                  <td className="p-3 text-[var(--highlight-color)] cursor-pointer">
                    {p.name}
                  </td>
                  <td className="p-3">{p.sku}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">₹{p.price}</td>
                  <td
                    className={`p-3 ${
                      p.stock < 10 ? "text-red-500" : "text-green-400"
                    }`}
                  >
                    {p.stock}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        p.status === "Active"
                          ? "bg-green-600 text-white"
                          : p.status === "Low Stock"
                          ? "bg-yellow-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2 text-lg">
                    <button title="Edit">
                      <FaEdit className="hover:text-[var(--highlight-color)]" />
                    </button>
                    <button title="Duplicate">
                      <FaClone className="hover:text-[var(--highlight-color)]" />
                    </button>
                    <button title="Delete">
                      <FaTrash className="hover:text-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center p-6 text-[var(--text-dark-light)]"
                >
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellsProducts;
