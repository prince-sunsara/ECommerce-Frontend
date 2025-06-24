import { useState } from "react";

const CredentialsSettings = () => {
  // --- States for Email & Mobile Section ---
  const [email, setEmail] = useState("hello@example.com");
  const [number, setNumber] = useState("0123456789");
  const [tempNewEmail, setTempNewEmail] = useState(email); // For editing email
  const [tempNewNumber, setTempNewNumber] = useState(number); // For editing number

  const [editModeEmailMobile, setEditModeEmailMobile] = useState(false);
  const [loadingEmailMobile, setLoadingEmailMobile] = useState(false);

  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");

  // --- States for Password Section ---
  const [currentPassword, setCurrentPassword] = useState(""); // User enters this
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [editModePassword, setEditModePassword] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const [passwordChangeOtpSent, setPasswordChangeOtpSent] = useState(false);
  const [passwordChangeOtp, setPasswordChangeOtp] = useState("");

  // --- Generic Input Component (can be replaced by your shared Input component) ---
  const StyledInput = ({
    label,
    type = "text",
    value,
    onChange,
    disabled,
    placeholder = "",
  }) => (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );

  // --- Handlers for Email & Mobile Section ---
  const handleSendEmailOtp = () => {
    setLoadingEmailMobile(true);
    // Simulate sending OTP to newEmail
    const simulatedOtp = "123456"; // In real app, this comes from backend
    setTimeout(() => {
      setLoadingEmailMobile(false);
      setEmailOtpSent(true);
      alert(`OTP sent to ${tempNewEmail}: ${simulatedOtp}`);
      // Store simulatedOtp in state or a ref for verification (for demo only)
      // In a real app, backend verifies OTP
    }, 1000);
  };

  const handleSendMobileOtp = () => {
    setLoadingEmailMobile(true);
    // Simulate sending OTP to newNumber
    const simulatedOtp = "654321"; // In real app, this comes from backend
    setTimeout(() => {
      setLoadingEmailMobile(false);
      setMobileOtpSent(true);
      alert(`OTP sent to ${tempNewNumber}: ${simulatedOtp}`);
      // Store simulatedOtp in state or a ref for verification (for demo only)
    }, 1000);
  };

  const handleSaveEmailMobile = () => {
    setLoadingEmailMobile(true);
    // Basic validation
    if (!emailOtpSent || !mobileOtpSent) {
      alert("Please verify both email and mobile with OTPs.");
      setLoadingEmailMobile(false);
      return;
    }
    // In a real app, you'd send tempNewEmail, tempNewNumber, emailOtp, mobileOtp to backend
    setTimeout(() => {
      setEmail(tempNewEmail);
      setNumber(tempNewNumber);
      setEmailOtpSent(false);
      setEmailOtp("");
      setMobileOtpSent(false);
      setMobileOtp("");
      setLoadingEmailMobile(false);
      setEditModeEmailMobile(false);
      alert("Email and Mobile updated successfully!");
    }, 1500);
  };

  const handleCancelEmailMobile = () => {
    setTempNewEmail(email); // Revert to original email
    setTempNewNumber(number); // Revert to original number
    setEmailOtpSent(false);
    setEmailOtp("");
    setMobileOtpSent(false);
    setMobileOtp("");
    setEditModeEmailMobile(false);
  };

  // --- Handlers for Password Section ---
  const handleSendPasswordOtp = () => {
    setLoadingPassword(true);
    // Simulate sending OTP to the user's *registered mobile number* (or email)
    const simulatedOtp = "987654"; // In real app, this comes from backend
    setTimeout(() => {
      setLoadingPassword(false);
      setPasswordChangeOtpSent(true);
      alert(
        `OTP sent to your registered mobile number (${number}): ${simulatedOtp}`
      );
      // Store simulatedOtp for verification (for demo only)
    }, 1000);
  };

  const handleSavePassword = () => {
    setLoadingPassword(true);
    // Basic validation
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      setLoadingPassword(false);
      return;
    }
    if (!currentPassword) {
      alert("Please enter your current password.");
      setLoadingPassword(false);
      return;
    }
    if (!newPassword) {
      alert("Please enter a new password.");
      setLoadingPassword(false);
      return;
    }
    if (!passwordChangeOtpSent) {
      alert("Please send and verify OTP for password change.");
      setLoadingPassword(false);
      return;
    }

    // In a real app, you'd send currentPassword, newPassword, passwordChangeOtp to backend
    setTimeout(() => {
      setCurrentPassword(""); // Clear for security
      setNewPassword("");
      setConfirmPassword("");
      setPasswordChangeOtpSent(false);
      setPasswordChangeOtp("");
      setLoadingPassword(false);
      setEditModePassword(false);
      alert("Password updated successfully!");
    }, 1500);
  };

  const handleCancelPassword = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordChangeOtpSent(false);
    setPasswordChangeOtp("");
    setEditModePassword(false);
  };

  return (
    <>
      <div className="bg-[var(--input-bg)] text-[var(--text-light)] rounded-lg p-6 shadow-md w-full max-w-3xl mx-auto my-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <h2 className="text-xl font-bold text-[var(--highlight-color)]">
            Email & Mobile Number Setting
          </h2>
          {editModeEmailMobile ? (
            <div className="flex gap-4">
              <button
                onClick={handleSaveEmailMobile}
                className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                disabled={loadingEmailMobile}
              >
                {loadingEmailMobile ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={handleCancelEmailMobile}
                className="text-sm hover:underline text-red-400 transition duration-300"
                disabled={loadingEmailMobile}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditModeEmailMobile(true)}
              className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition duration-300"
            >
              Edit
            </button>
          )}
        </div>

        {/* Email Section */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Current Email</label>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={editModeEmailMobile ? tempNewEmail : email}
              onChange={(e) => setTempNewEmail(e.target.value)}
              disabled={!editModeEmailMobile || emailOtpSent}
              className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
            {editModeEmailMobile && (
              <button
                onClick={handleSendEmailOtp}
                disabled={loadingEmailMobile || emailOtpSent || !tempNewEmail}
                className={`
                  px-3 py-2 text-xs rounded-md font-semibold whitespace-nowrap
                  ${
                    emailOtpSent
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[var(--primary-color)] hover:bg-[var(--primary-hover)]"
                  }
                  text-[var(--button-text-color)] transition duration-300
                `}
              >
                {loadingEmailMobile
                  ? "Sending..."
                  : emailOtpSent
                  ? "OTP Sent"
                  : "Send OTP"}
              </button>
            )}
          </div>
          {editModeEmailMobile && emailOtpSent && (
            <input
              type="text"
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
              placeholder="Enter Email OTP"
              className="w-full mt-2 px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
          )}
        </div>

        {/* Mobile Section */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">
            Current Mobile Number
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={editModeEmailMobile ? tempNewNumber : number}
              onChange={(e) => setTempNewNumber(e.target.value)}
              disabled={!editModeEmailMobile || mobileOtpSent}
              className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
            {editModeEmailMobile && (
              <button
                onClick={handleSendMobileOtp}
                disabled={loadingEmailMobile || mobileOtpSent || !tempNewNumber}
                className={`
                  px-3 py-2 text-xs rounded-md font-semibold whitespace-nowrap
                  ${
                    mobileOtpSent
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[var(--primary-color)] hover:bg-[var(--primary-hover)]"
                  }
                  text-[var(--button-text-color)] transition duration-300
                `}
              >
                {loadingEmailMobile
                  ? "Sending..."
                  : mobileOtpSent
                  ? "OTP Sent"
                  : "Send OTP"}
              </button>
            )}
          </div>
          {editModeEmailMobile && mobileOtpSent && (
            <input
              type="text"
              value={mobileOtp}
              onChange={(e) => setMobileOtp(e.target.value)}
              placeholder="Enter Mobile OTP"
              className="w-full mt-2 px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
            />
          )}
        </div>
      </div>
      <div className="h-5 md:h-8 -mx-[25px] bg-[var(--hero-bg)]"></div>{" "}
      {/* Separator */}
      <div className="bg-[var(--input-bg)] text-[var(--text-light)] rounded-lg p-6 shadow-md w-full max-w-3xl mx-auto mt-6 md:mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <h2 className="text-xl font-bold text-[var(--highlight-color)]">
            Password Setting
          </h2>
          {editModePassword ? (
            <div className="flex gap-4">
              <button
                onClick={handleSavePassword}
                className="px-4 py-1 text-sm rounded bg-[var(--highlight-color)] text-[var(--button-text-color)] font-semibold hover:bg-[var(--primary-hover)] transition duration-300"
                disabled={loadingPassword}
              >
                {loadingPassword ? "Saving..." : "Save Changes"}
              </button>
              <button
                onClick={handleCancelPassword}
                className="text-sm hover:underline text-red-400 transition duration-300"
                disabled={loadingPassword}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditModePassword(true)}
              className="px-4 py-1 text-sm rounded bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition duration-300"
            >
              Edit
            </button>
          )}
        </div>

        {/* Password Section Fields */}
        {!editModePassword ? (
          // Display only disabled Current Password field when not in edit mode
          <StyledInput
            label="Current Password"
            type="password"
            value="" // Keep value empty for display, or show actual if needed but usually not for security
            disabled={true}
            placeholder={"********"}
          />
        ) : (
          // Display all three password fields when in edit mode
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StyledInput
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              disabled={loadingPassword} // Disable while saving
              placeholder={"Enter current password"}
            />
            <StyledInput
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loadingPassword || !passwordChangeOtpSent} // New/Confirm passwords enabled after OTP
              placeholder={"Enter new password"}
            />
            <div className="flex">
              <StyledInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loadingPassword || !passwordChangeOtpSent} // New/Confirm passwords enabled after OTP
                placeholder={"Confirm new password"}
              />
              <button
                onClick={handleSendPasswordOtp}
                disabled={loadingPassword || passwordChangeOtpSent}
                className={`px-2 py-1 text-xs rounded-md font-semibold whitespace-nowrap ${
                  passwordChangeOtpSent
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[var(--primary-color)] hover:bg-[var(--primary-hover)]"
                } text-[var(--button-text-color)] transition duration-300 h-10 mt-auto ml-2`}
              >
                {loadingPassword
                  ? "Sending..."
                  : passwordChangeOtpSent
                  ? "OTP Sent"
                  : "Send OTP"}
              </button>
            </div>
          </div>
        )}
        {editModePassword && passwordChangeOtpSent && (
          <input
            type="text"
            value={passwordChangeOtp}
            onChange={(e) => setPasswordChangeOtp(e.target.value)}
            placeholder="Enter Password Change OTP (sent to mobile)"
            className="w-full mt-4 px-4 py-2 rounded-md bg-[var(--hero-bg)] text-[var(--text-light)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)]"
          />
        )}
      </div>
    </>
  );
};

export default CredentialsSettings;
