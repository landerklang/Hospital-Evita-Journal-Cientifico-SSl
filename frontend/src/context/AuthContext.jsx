import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/verify", {
          method: "get",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.usuario);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error verificando sesión:", error);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
