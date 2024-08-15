/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const logindata = JSON.parse(localStorage.getItem("Logindata")) || false;
  const register = JSON.parse(localStorage.getItem("RegisterData")) || false;

  console.log(
    !register
      ? "Navigate to register"
      : register && logindata && "Children rendering"
  );

  return !register ? <Navigate to="/register" /> : <>{children}</>;
};
