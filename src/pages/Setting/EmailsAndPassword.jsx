import { useState } from "react";

const EmailsPassword = () => {
  const [email, setEmail] = useState("hello@example.com");
  const [newEmail, setNewEmail] = useState(email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setEmail(newEmail);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[var(--input-bg)] text-[var(--text-light)] rounded-lg p-6 shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-[var(--highlight-color)]">
        Email & Password Settings
      </h2>

      {/* Email Section */}
      <div className="mb-8">
        <label className="block mb-2 font-medium">Current Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
        />
      </div>

      {/* Password Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handleSave}
          className="bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold px-6 py-2 rounded-md hover:bg-[var(--primary-hover)] transition duration-300"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EmailsPassword;
