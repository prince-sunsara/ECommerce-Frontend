import { useState } from "react";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Prince Sunsara",
      address: "123 MG Road, Near City Mall",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      zip: "380001",
      phone: "+91 9876543210",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAddresses([...addresses, { ...newAddress, id }]);
    setNewAddress({
      name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      phone: "",
    });
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <div className="min-h-screen bg-[var(--hero-bg)] text-[var(--text-light)] p-6">
      <div className="max-w-4xl mx-auto bg-[var(--input-bg)] p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-[var(--highlight-color)] mb-6">
          Address Book
        </h2>

        {/* Existing Addresses */}
        <div className="space-y-4 mb-10">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="border border-[var(--border-color)] rounded-lg p-4"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-bold text-[var(--primary-color)]">
                    {addr.name}
                  </p>
                  <p>{addr.address}</p>
                  <p>
                    {addr.city}, {addr.state}
                  </p>
                  <p>
                    {addr.country} - {addr.zip}
                  </p>
                  <p>Phone: {addr.phone}</p>
                </div>
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="mt-3 sm:mt-0 text-sm text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Address */}
        <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">
          Add New Address
        </h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleAdd}
        >
          <input
            name="name"
            placeholder="Full Name"
            value={newAddress.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={newAddress.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="address"
            placeholder="Street Address"
            value={newAddress.address}
            onChange={handleChange}
            className="md:col-span-2 w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="city"
            placeholder="City"
            value={newAddress.city}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="state"
            placeholder="State"
            value={newAddress.state}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="zip"
            placeholder="Zip Code"
            value={newAddress.zip}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />
          <input
            name="country"
            placeholder="Country"
            value={newAddress.country}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--ring-color)] focus:outline-none"
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold py-2 px-4 rounded-md hover:bg-[var(--primary-hover)] transition"
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressBook;
