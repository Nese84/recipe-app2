import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
const PrivateRouter = ({islogin}) => {

  return islogin ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
