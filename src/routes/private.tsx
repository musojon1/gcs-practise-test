import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
