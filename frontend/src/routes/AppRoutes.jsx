import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { PublicRoutes } from "./PublicRoutes.jsx";
import { PrivateRoutes } from "./PrivateRoutes.jsx";
import DashboardHome from "../pages/DashboardHome.jsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<DashboardHome />}></Route>
      </Route>
      <Route element={<PrivateRoutes />}></Route>

      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};
