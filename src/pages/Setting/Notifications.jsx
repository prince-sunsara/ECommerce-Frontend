import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    smsAlerts: false,
    orderUpdates: true,
    promotionalOffers: false,
    appPush: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-[var(--input-bg)] text-[var(--text-light)] rounded-lg p-6 shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-[var(--highlight-color)]">
        Notification Preferences
      </h2>

      <div className="space-y-6">
        {/* Notification Item */}
        {[
          {
            label: "Email Updates",
            key: "emailUpdates",
            desc: "Receive updates via email for your account and orders.",
          },
          {
            label: "SMS Alerts",
            key: "smsAlerts",
            desc: "Get important messages via text on your mobile number.",
          },
          {
            label: "Order Status Updates",
            key: "orderUpdates",
            desc: "Receive real-time updates about your order progress.",
          },
          {
            label: "Promotional Offers",
            key: "promotionalOffers",
            desc: "Get exclusive deals, discounts, and promotions.",
          },
          {
            label: "App Push Notifications",
            key: "appPush",
            desc: "Get push alerts from our mobile app.",
          },
        ].map(({ label, key, desc }) => (
          <div
            key={key}
            className="flex items-start justify-between bg-[var(--hero-bg)] p-4 rounded-md border border-[var(--border-color)]"
          >
            <div className="flex-1 pr-4">
              <h3 className="font-medium text-[var(--text-light)]">{label}</h3>
              <p className="text-sm text-[var(--text-dark-light)]">{desc}</p>
            </div>
            <button
              onClick={() => toggleNotification(key)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                notifications[key]
                  ? "bg-[var(--highlight-color)]"
                  : "bg-[var(--border-color)]"
              }`}
            >
              <div
                className={`bg-[var(--button-text-color)] w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  notifications[key] ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
