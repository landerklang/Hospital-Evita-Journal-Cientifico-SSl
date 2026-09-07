import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const isLoggen = localStorage.getItem("token");

  return isLoggen ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
