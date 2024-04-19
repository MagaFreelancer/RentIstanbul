import { useLocation, Navigate } from "react-router-dom";


const RequireAuth = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const auth = localStorage.getItem("tokenInfo") && true;
  console.log(auth);
  if (!auth) {
    return <Navigate to="/admin" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
