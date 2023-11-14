import React, { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";

const Layout = () => {
  const location = useLocation();
  const pathname = useMemo(() => {
    return location.pathname;
  }, [location]);
  const hash = useMemo(() => {
    return location.hash.split("#")[1];
  }, [location]);
  useEffect(() => {
    if (!hash) {
      document.body.scrollIntoView();
    }
  }, [hash, pathname]);

  return (
    <div className="page">
      <PageHeader />
      <Outlet />
      <PageFooter />
    </div>
  );
};
export default Layout;
