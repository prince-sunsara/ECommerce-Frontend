import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout, isLoggedIn } = useAuth();
  if (!isLoggedIn) return null;

  return (
    <>
      <button
        onClick={logout}
        className="mt-6 border border-[var(--logout-text)] text-[var(--logout-text)] hover:text-white hover:bg-[var(--logout-text)] rounded-md px-4 py-2 transition-all cursor-pointer"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
