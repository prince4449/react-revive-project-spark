import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { userRoutes } from "./UserRoutes";
import ServiceExpert from "../pages/ServiceExpert";
import Jobs from "../pages/Jobs";
import Travel from "../pages/Travel";
import Products from "../pages/Products";
import CategoryListing from "../pages/AllServices/CategoryListing";
import AllCategory from "../pages/AllServices/AllCategory";
import CategoryDetails from "../pages/AllServices/CategoryDetails";

const UserRoutesData = () => {
  return (
    <>
      <Routes>
        <Route path={userRoutes.home} element={<HomePage />} />
        <Route path={userRoutes.allCategory} element={<AllCategory />} />
        <Route path={userRoutes.serviceExpert} element={<ServiceExpert />} />
        <Route path={userRoutes.jobs} element={<Jobs />} />
        <Route path={userRoutes.travels} element={<Travel />} />
        <Route path={userRoutes.products} element={<Products />} />
        <Route path={userRoutes.categoryList} element={<CategoryListing />} />
        <Route
          path={userRoutes.CategoryDetails}
          element={<CategoryDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserRoutesData;
