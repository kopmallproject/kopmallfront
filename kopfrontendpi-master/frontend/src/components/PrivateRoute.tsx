import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = "/login" }) => {
  const {userLogin} = useSelector((state: any) => state.userLogin);
  console.log("isAuth userLogin", userLogin)
  // const accessToken = localStorage.getItem("accessToken")

  if (!userLogin.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;

