import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { PublicRoutes } from "./PublicRoutes.jsx";
import { PrivateRoutes } from "./PrivateRoutes.jsx";
import DashboardHome from "../pages/DashboardHome.jsx";

const MisArticulos = () => (
  <h1 className="text-2xl font-bold">Mis Artículos Subidos</h1>
);
const Revisiones = () => (
  <h1 className="text-2xl font-bold">Panel de Revisiones del Comité</h1>
);
export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<DashboardHome />}></Route>
        <Route path="mis-articulos" element={<MisArticulos />} />
        <Route path="revisiones" element={<Revisiones />} />{" "}
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};
