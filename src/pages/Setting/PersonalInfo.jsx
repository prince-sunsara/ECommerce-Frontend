import { useState } from "react";
import { Input, Select } from "../../components";

const PersonalInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/100");
  const [formData, setFormData] = useState({
    firstName: "Arafat",
    lastName: "Nayeem",
    email: "hello@filllo.co",
    phone: "+880 1681 788 203",
    country: "Bangladesh",
    city: "Sylhet",
    zip: "3100",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEditMode(false);
    }, 1000);
  };
  return (
    <>
      <main className="flex-1 p-6">
        <div className="bg-[var(--input-bg)] rounded-lg p-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <h2 className="text-xl font-bold text-[var(--highlight-color)]">
              Personal Information
            </h2>
            {editMode ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)]"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="text-sm hover:underline text-red-400"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)]"
              >
                Edit
              </button>
            )}
          </div>

          {/* Profile Image Upload */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={profileImage}
              alt="User"
              className="w-20 h-20 rounded-full object-cover border-2 border-[var(--border-bg)]"
            />
            {editMode && (
              <label className="text-sm cursor-pointer hover:underline">
                Change Picture
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Form Inputs */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Select
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={!editMode}
              options={["India", "Bangladesh", "USA", "UK"]}
            />
            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Input
              label="Zip Code"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              disabled={!editMode}
            />
          </form>

          {/* Delete Account */}
          <div className="mt-10 bg-[#2e2f35] p-4 rounded-md border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-400 mb-2">
              Delete Account
            </h3>
            <p className="text-sm mb-2">
              After making a deletion request, you will have{" "}
              <span className="font-bold">6 months</span> to recover this
              account.
            </p>
            <p className="text-xs mb-4 text-[var(--text-dark-light)]">
              Deleting your account will permanently remove all your data and
              history.
            </p>
            <button className="text-[var(--logout-text)] hover:text-red-400 font-medium cursor-pointer">
              Permanently Delete Account
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PersonalInfo;
