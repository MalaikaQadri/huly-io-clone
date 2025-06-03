import React from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from '.././pages/homepage/HomePage'
import PricingPage from '.././pages/pricingpage/PricingPage'
import Blogpge from '.././pages/blogpage/BlogPge'
import Downloadpage from '.././pages/downloadpage/Downloadpage'
import Signup from '.././pages/signup_page/Singup'
import GetStarted from '.././pages/get_startedpage/GetStarted'
import DocumentPage from "../pages/documentpage/DocumentPage";
function CommonRoutes() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route element={<HomePage />} path="/homepage"></Route>
        <Route element={<PricingPage />} path="/pricing"></Route>
        <Route element={<Blogpge />} path="/blog"></Route>
        <Route element={<DocumentPage />} path="/document"></Route>
        <Route element={<Downloadpage />} path="/download"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<GetStarted />} path="/getstarted"></Route>
      </Routes>
    </>
  );
}

export default CommonRoutes;
