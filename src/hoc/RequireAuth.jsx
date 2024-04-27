import { useLocation, Navigate } from "react-router-dom";


const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = localStorage.getItem("tokenInfo") && true;
  if (!auth) {
    return <Navigate to="/admin" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
