import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { userRoutes } from './UserRoutes';

const UserRoutesData = () => {
  return (
    <>
      <Routes>
        <Route path={userRoutes.home} element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserRoutesData;
