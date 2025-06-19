import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EmailsAndPassword from "./EmailsAndPassword";
import Notifications from "./Notifications";
import AddressBook from "./AddressBook";
import PaymentMethods from "./PaymentMethods";
import { Logout } from "../../components";

const SettingMenuList = [
  "Personal Info",
  "Emails & Password",
  "Notifications",
  "Address Book",
  "Payment Methods",
];

const pageComponents = {
  "Personal Info": PersonalInfo,
  "Emails & Password": EmailsAndPassword,
  Notifications: Notifications,
  "Address Book": AddressBook,
  "Payment Methods": PaymentMethods,
};

const Settings = () => {
  const [activePage, setActivePage] = useState("Personal Info");

  const ActiveComponent = pageComponents[activePage];

  return (
    <div className="min-h-screen bg-[var(--hero-bg)] text-[var(--text-light)] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[var(--input-bg)] p-6">
        <h2 className="text-xl font-semibold mb-6 text-[var(--primary-color)]">
          User Profile
        </h2>
        <ul className="space-y-4 text-[var(--text-dark-light)]">
          {SettingMenuList.map((item) => (
            <li
              key={item}
              onClick={() => setActivePage(item)}
              className={`cursor-pointer px-3 py-2 rounded-md font-medium transition-all duration-200 ease-in-out
                ${
                  activePage === item
                    ? "bg-[var(--primary-color)] shadow-md text-[var(--button-text-color)]"
                    : "hover:text-[var(--highlight-color)]"
                }
                active:scale-[0.97] active:animate-pulse
              `}
            >
              {item}
            </li>
          ))}
          <Logout />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-[var(--input-bg)] rounded-lg p-6 shadow-md transition-all">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
};

export default Settings;
