import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";

const Layout = () => {

  return (
    <div className="page">
      <PageHeader />
      <Outlet />
      {/* <PageFooter /> */}
    </div>
  );
};
export default Layout;
