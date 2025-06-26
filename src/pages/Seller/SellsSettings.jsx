import { useState } from "react";
import { motion } from "framer-motion";

const SellsProfile = () => {
  const [profile, setProfile] = useState({
    name: "TechGears Pvt Ltd",
    email: "seller@techgears.com",
    phone: "+91 9876543210",
    bio: "Leading gadgets supplier across India.",
    profilePicture: null,
    bannerImage: null,
    address: {
      street: "123 MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
    },
    storeName: "techgears",
    social: {
      facebook: "https://facebook.com/techgears",
      instagram: "https://instagram.com/techgears",
      twitter: "https://twitter.com/techgears",
      linkedin: "https://linkedin.com/company/techgears",
    },
    password: {
      current: "",
      new: "",
      confirm: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      social: { ...prev.social, [name]: value },
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      password: { ...prev.password, [name]: value },
    }));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10 text-[var(--text-light)]">
      <h1 className="text-3xl font-bold text-[var(--highlight-color)] mb-4">
        My Profile
      </h1>

      {/* Profile Information */}
      <section className="bg-[var(--input-bg)] p-6 rounded-xl border border-[var(--border-color)] space-y-4">
        <h2 className="text-xl font-semibold">Basic Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Contact Email"
            type="email"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            rows={2}
            placeholder="Short Bio"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded col-span-2"
          />
        </div>
      </section>

      {/* Address */}
      <section className="bg-[var(--input-bg)] p-6 rounded-xl border border-[var(--border-color)] space-y-4">
        <h2 className="text-xl font-semibold">Business Address</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="street"
            value={profile.address.street}
            onChange={handleAddressChange}
            placeholder="Street"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="city"
            value={profile.address.city}
            onChange={handleAddressChange}
            placeholder="City"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="state"
            value={profile.address.state}
            onChange={handleAddressChange}
            placeholder="State/Province"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="postalCode"
            value={profile.address.postalCode}
            onChange={handleAddressChange}
            placeholder="Postal Code"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="country"
            value={profile.address.country}
            onChange={handleAddressChange}
            placeholder="Country"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-[var(--input-bg)] p-6 rounded-xl border border-[var(--border-color)] space-y-4">
        <h2 className="text-xl font-semibold">Social Media Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="facebook"
            value={profile.social.facebook}
            onChange={handleSocialChange}
            placeholder="Facebook URL"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="instagram"
            value={profile.social.instagram}
            onChange={handleSocialChange}
            placeholder="Instagram URL"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="twitter"
            value={profile.social.twitter}
            onChange={handleSocialChange}
            placeholder="Twitter URL"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="linkedin"
            value={profile.social.linkedin}
            onChange={handleSocialChange}
            placeholder="LinkedIn URL"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
        </div>
      </section>

      {/* Password Change */}
      <section className="bg-[var(--input-bg)] p-6 rounded-xl border border-[var(--border-color)] space-y-4">
        <h2 className="text-xl font-semibold">Change Password</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            name="current"
            value={profile.password.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            type="password"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="new"
            value={profile.password.new}
            onChange={handlePasswordChange}
            placeholder="New Password"
            type="password"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
          <input
            name="confirm"
            value={profile.password.confirm}
            onChange={handlePasswordChange}
            placeholder="Confirm New Password"
            type="password"
            className="p-3 bg-[var(--primary-bg)] border border-[var(--border-color)] rounded"
          />
        </div>
        <button className="mt-4 px-6 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--button-text-color)] rounded">
          Change Password
        </button>
      </section>

      {/* Actions */}
      <div className="flex gap-4 justify-end">
        <button className="px-6 py-2 border border-[var(--primary-color)] text-white rounded hover:bg-[var(--primary-hover)]">
          Cancel
        </button>
        <button className="px-6 py-2 bg-[var(--primary-color)] text-[var(--button-text-color)] rounded hover:bg-[var(--primary-hover)]">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SellsProfile;
