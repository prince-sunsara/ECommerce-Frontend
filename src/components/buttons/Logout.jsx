import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout, user } = useUser();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();             // clear user & cookies
    navigate("/", { replace: true });  // redirect to homepage
  };
  if (!user) return null;
  return (
    <button
      onClick={handleLogout}
      className="mt-6 border border-[var(--logout-text)] text-[var(--logout-text)] hover:text-white hover:bg-[var(--logout-text)] rounded-md px-4 py-2 transition-all cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
