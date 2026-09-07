import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const isLoggen = localStorage.getItem("token");

  return !isLoggen ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" />
  );
};
