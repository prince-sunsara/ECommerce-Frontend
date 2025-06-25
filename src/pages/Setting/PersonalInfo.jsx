import { useState, useEffect } from "react";
import { Input, Select } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../context/UserContext";
import StatusModal from "../../components/StatusModal";
import axios from "axios";

const PersonalInfo = () => {
  const { user, setUser } = useUser();

  const [editModeInfo, setEditModeInfo] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phone: "",
  });

  const [editModeImage, setEditModeImage] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [file, setFile] = useState(null);
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/100");
  const [tempProfileImage, setTempProfileImage] = useState(profileImage);

  // --- Modal States ---
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
    onClose: () => setModal({ ...modal, isOpen: false }),
  });

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  useEffect(() => {
    setFormData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      username: user?.username || "",
      gender: user?.gender || "",
      dateOfBirth: user?.birthdate || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });

    if (user?.avatar) {
      setProfileImage(user.avatar);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveInfo = async () => {
    setLoadingInfo(true);
    try {
      const { firstName, lastName, username, gender, dateOfBirth } = formData;

      const res = await axios.patch(
        "/api/v1/users/account/change/details",
        {
          firstName,
          lastName,
          username,
          gender,
          birthdate: dateOfBirth,
        },
        { withCredentials: true }
      );

      setUser(res.data.data);
      setEditModeInfo(false);

      setModal({
        isOpen: true,
        type: "success",
        title: "Profile Updated",
        message: "Your personal information has been updated successfully.",
        onClose: () => setModal({ ...modal, isOpen: false }),
      });
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Update Failed",
        message: error.response?.data?.message || "Something went wrong.",
        onClose: () => setModal({ ...modal, isOpen: false }),
      });
    } finally {
      setLoadingInfo(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await axios.delete("/api/v1/users/account/delete", {
        withCredentials: true,
      });

      setUser(null);

      setModal({
        isOpen: true,
        type: "success",
        title: "Account Deleted",
        message: res.data.message || "Your account has been deleted successfully.",
        onClose: () => {
          setModal({ ...modal, isOpen: false });
          window.location.href = "/";
        },
      });
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Deletion Failed",
        message: error.response?.data?.message || "Something went wrong.",
        onClose: () => setModal({ ...modal, isOpen: false }),
      });
    }
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempProfileImage(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleSaveImage = async () => {
    if (!file) return;

    try {
      setLoadingImage(true);

      const formDataData = new FormData();
      formDataData.append("avatar", file);

      const response = await axios.patch(
        "/api/v1/users/account/change/avatar",
        formDataData,
        { withCredentials: true }
      );

      setUser(response.data.data);
      setProfileImage(response.data.data.avatar);
      setEditModeImage(false);

      // ✅ Show success modal
      setModal({
        isOpen: true,
        type: "success",
        title: "Profile Image Updated",
        message: "Your profile picture has been updated successfully.",
        onClose: () => setModal((prev) => ({ ...prev, isOpen: false })),
      });
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Upload Failed",
        message: error.response?.data?.message || "Could not upload profile image.",
        onClose: () => setModal((prev) => ({ ...prev, isOpen: false })),
      });
    } finally {
      setLoadingImage(false);
    }
  };

  return (
    <>
      <main className="flex-1 p-6">
        {/* Profile Image Section */}
        <div className="bg-[var(--input-bg)] rounded-lg p-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            {editModeImage ? (
              <div className="flex gap-4 ml-auto">
                <button
                  onClick={handleSaveImage}
                  className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                >
                  {loadingImage ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditModeImage(false)}
                  className="text-sm hover:underline text-red-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEditModeImage(true);
                  setTempProfileImage(profileImage);
                }}
                className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition duration-300 ml-auto"
              >
                Edit
              </button>
            )}
          </div>

          <div className="flex justify-center items-center gap-4 mb-6">
            <img
              src={editModeImage ? tempProfileImage : profileImage}
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

        {/* Personal Info Section */}
        <div className="mb-8 p-4 rounded-md border border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <h2 className="text-xl font-bold text-[var(--highlight-color)]">Personal Details</h2>
            {editModeInfo ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSaveInfo}
                  className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                >
                  {loadingInfo ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditModeInfo(false)}
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

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} disabled={!editModeInfo} />
            <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} disabled={!editModeInfo} />
            <Input label="Username" name="username" value={formData.username} onChange={handleChange} disabled={!editModeInfo} />
            <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange} disabled={!editModeInfo} options={["Male", "Female", "Other", "Prefer not to say"]} />
            <Input label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} disabled={!editModeInfo} />
            <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} disabled helpText="Email can only be changed in 'Account Security' settings." />
            <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} disabled helpText="Phone number can only be changed in 'Account Security' settings." />
          </form>
        </div>

        {/* Delete Account Section */}
        <div className="mt-10 bg-[#2e2f35] p-4 rounded-md border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-400 mb-2">Delete Account</h3>
          <p className="text-sm mb-2 text-[var(--text-light)]">
            After making a deletion request, you will have <span className="font-bold">6 months</span> to recover this account.
          </p>
          <p className="text-xs mb-4 text-[var(--text-dark-light)]">
            Deleting your account will permanently remove all your data and history.
          </p>
          <button
            className="text-[var(--logout-text)] hover:text-red-400 font-medium cursor-pointer transition duration-300"
            onClick={() => setConfirmModalOpen(true)}
          >
            Permanently Delete Account
          </button>
        </div>
      </main>

      {/* Confirmation Modal */}
      <StatusModal
        isOpen={confirmModalOpen}
        type="error"
        title="Confirm Deletion"
        message="Are you sure you want to permanently delete your account? This action cannot be undone."
        buttonText="Yes, Delete"
        onClose={() => {
          setConfirmModalOpen(false);
          handleDeleteAccount();
        }}
      />

      {/* Status Modal */}
      <StatusModal {...modal} />
    </>
  );
};

export default PersonalInfo;
