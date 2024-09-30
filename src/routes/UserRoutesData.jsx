import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { userRoutes } from "./UserRoutes";
import Travel from "../pages/Travel";
import CategoryListing from "../pages/AllServices/CategoryListing";
import AllCategory from "../pages/AllServices/AllCategory";
import CategoryDetails from "../pages/AllServices/CategoryDetails";
import ServiceExpert from "../pages/Experts/ServiceExpert";
import ExpertList from "../pages/Experts/ExpertList";
import ExpertsProfile from "../pages/Experts/ExpertsProfile";
import Jobs from './../pages/Jobs/Jobs';
import AllJobs from "../pages/Jobs/AllJobs";
import JobDetails from "../pages/Jobs/JobDetails";
import Products from './../pages/Products/Products';
import ProductsDetails from "../pages/Products/ProductsDetails";

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
        <Route path={userRoutes.expertList} element={<ExpertList />} />
        <Route path={userRoutes.expertProfile} element={<ExpertsProfile />} />
        <Route
          path={userRoutes.CategoryDetails}
          element={<CategoryDetails />}
        />
        <Route path={userRoutes.allJobs} element={<AllJobs />} />
        <Route path={userRoutes.jobDetails} element={<JobDetails />} />
        <Route
          path={userRoutes.productsDetails}
          element={<ProductsDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserRoutesData;
