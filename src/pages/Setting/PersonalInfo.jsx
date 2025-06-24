import { useState } from "react";
import { Input, Select } from "../../components"; // Ensure these components are correctly imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const PersonalInfo = () => {
  // --- State for Personal Info Fields (First Name, Last Name, etc.) ---
  const [editModeInfo, setEditModeInfo] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Arafat",
    lastName: "Nayeem",
    username: "arafat_nayeem",
    gender: "Male",
    dateOfBirth: "1990-01-01",
    email: "hello@filllo.co", // Display only
    phone: "+880 1681 788 203", // Display only
  });

  // --- State for Profile Image ---
  const [editModeImage, setEditModeImage] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/100");
  // A temporary state to hold the new image URL before saving
  const [tempProfileImage, setTempProfileImage] = useState(
    "https://i.pravatar.cc/100"
  );

  // --- Handlers for Personal Info Fields ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveInfo = () => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
      setEditModeInfo(false);
      console.log("Saving personal data:", formData);
      // In a real app, send formData to your backend
    }, 1000);
  };

  const handleCancelInfo = () => {
    // Reset formData to its last saved state or initial state if needed
    // For simplicity, we'll just exit edit mode here.
    setEditModeInfo(false);
  };

  // --- Handlers for Profile Image ---
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempProfileImage(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleSaveImage = () => {
    setLoadingImage(true);
    setTimeout(() => {
      setProfileImage(tempProfileImage); // Commit the new image
      setLoadingImage(false);
      setEditModeImage(false);
      console.log("Saving profile image:", profileImage);
      // In a real app, upload the image file to your backend
    }, 1000);
  };

  const handleCancelImage = () => {
    setTempProfileImage(profileImage); // Revert to current saved image
    setEditModeImage(false);
  };

  return (
    <>
      <main className="flex-1 p-6">
        <div className="bg-[var(--input-bg)] rounded-lg p-6 shadow-md">
          {/* Section: Profile Image */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            {editModeImage ? (
              <div className="flex gap-4  ml-auto">
                <button
                  onClick={handleSaveImage}
                  className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                >
                  {loadingImage ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleCancelImage}
                  className="text-sm hover:underline text-red-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEditModeImage(true);
                  setTempProfileImage(profileImage); // Initialize temp with current image
                }}
                className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition duration-300 ml-auto"
              >
                Edit
              </button>
            )}
          </div>

          {/* Profile Image Upload */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <img
              src={editModeImage ? tempProfileImage : profileImage} // Show temp image if in edit mode
              alt="User"
              className="w-40 h-40 rounded-full object-cover border-2 border-[var(--border-bg)]"
            />
            {editModeImage && (
              <label className="text-sm cursor-pointer hover:underline text-[var(--text-light)]">
                <FontAwesomeIcon icon={faPen} />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageFileChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* Section: Personal Information Fields */}
        <div className="mb-8 p-4 rounded-md border border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <h2 className="text-xl font-bold text-[var(--highlight-color)]">
              Personal Details
            </h2>
            {editModeInfo ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSaveInfo}
                  className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                >
                  {loadingInfo ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleCancelInfo}
                  className="text-sm hover:underline text-red-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditModeInfo(true)}
                className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition duration-300"
              >
                Edit
              </button>
            )}
          </div>

          {/* Form Inputs for Personal Info */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!editModeInfo}
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!editModeInfo}
            />
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={!editModeInfo}
            />
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!editModeInfo}
              options={["Male", "Female", "Other", "Prefer not to say"]}
            />
            <Input
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              disabled={!editModeInfo}
            />

            {/* Email Address - Always disabled */}
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={true}
              helpText="Email can only be changed in 'Account Security' settings."
            />
            {/* Phone Number - Always disabled */}
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={true}
              helpText="Phone number can only be changed in 'Account Security' settings."
            />
          </form>
        </div>

        {/* Delete Account (remains as is) */}
        <div className="mt-10 bg-[#2e2f35] p-4 rounded-md border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-400 mb-2">
            Delete Account
          </h3>
          <p className="text-sm mb-2 text-[var(--text-light)]">
            After making a deletion request, you will have
            <span className="font-bold">6 months</span> to recover this account.
          </p>
          <p className="text-xs mb-4 text-[var(--text-dark-light)]">
            Deleting your account will permanently remove all your data and
            history.
          </p>
          <button className="text-[var(--logout-text)] hover:text-red-400 font-medium cursor-pointer transition duration-300">
            Permanently Delete Account
          </button>
        </div>
      </main>
    </>
  );
};

export default PersonalInfo;
