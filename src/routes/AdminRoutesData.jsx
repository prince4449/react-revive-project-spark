import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import { adminRoutes } from "./AdminRoutes";

const AdminRoutesData = () => {
  return (
    <>
      <Routes>
        <Route path={adminRoutes.homePage} element={<AdminDashboard />} />

      </Routes>
    </>
  );
};

export default AdminRoutesData;
