import React from "react";
import { useLocation } from "react-router-dom";
import CommonRoutes from "../routes/CommonRoutes";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  const location = useLocation();
  const shouldHideNavbar = location.pathname.startsWith('/document');

  return (
    <div>
      {!shouldHideNavbar && <Navbar/>}
      <CommonRoutes />
    </div>
  );
}

export default Layout;
