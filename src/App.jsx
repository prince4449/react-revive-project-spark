import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserRoutesData from "./routes/UserRoutesData";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // useEffect(() => {
  //   const scriptPaths = [
  //     "/src/assets/js/jquery.min.js",
  //     "/src/assets/js/popper.min.js",
  //     "/src/assets/js/bootstrap.min.js",
  //     "/src/assets/js/jquery-ui.js",
  //     "/src/assets/js/select-opt.js",
  //     "/src/assets/js/slick.js",
  //     "/src/assets/js/custom.js",
  //     "/src/assets/js/jquery.validate.min.js",
  //   ];

  //   scriptPaths.forEach((src) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.async = true;
  //     script.onload = () => {
  //       console.log(`${src} loaded`);
  //       // If needed, call any initialization function after the script loads
  //       if (src.includes("custom.js")) {
  //         initCustomFunctionality(); // hypothetical function
  //       }
  //     };
  //     document.body.appendChild(script);
  //   });

  //   return () => {
  //     scriptPaths.forEach((src) => {
  //       const existingScript = document.querySelector(`script[src="${src}"]`);
  //       if (existingScript) {
  //         existingScript.remove();
  //       }
  //     });
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<UserRoutesData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
