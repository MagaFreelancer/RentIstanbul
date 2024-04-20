import { Route, Routes, NavLink } from "react-router-dom";
import Auth from "../Auth";
import Requests from "../Requests";
import { MenuList } from "../../components";
import RequireAuth from "../../hoc/RequireAuth";
import AdminCars from "../AdminCars";

const Admin = () => {
  return (
    <>
      <MenuList />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/requests"
          element={
            <RequireAuth>
              <Requests />
            </RequireAuth>
          }
        />
        <Route
          path="/cars"
          element={
            <RequireAuth>
              <AdminCars />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
export default Admin;
