import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header({ companyName = "Youbloom" }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-lg px-6 h-16">
    
      <div className="flex items-center gap-5 px-4 py-2 h-24">
  <img
    src="/Youbloom_logo.png"
    alt={companyName}
    className="h-20 w-20 object-contain"
  />

</div>

      {/* زر الخروج */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-gradient-to-r from-[#ba1615] to-[#700e0f] 
                   text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform h-10"
      >
        <ArrowRightOnRectangleIcon className="h-5 w-5" />
        Logout
      </button>
    </header>
  );
}
