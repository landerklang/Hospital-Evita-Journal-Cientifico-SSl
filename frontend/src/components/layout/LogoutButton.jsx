import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Cerrar sesión
    </button>
  );
};
