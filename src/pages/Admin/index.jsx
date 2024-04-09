import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Auth from "../Auth";
import Requests from "../Requests";
import { MenuList } from "../../components";

const Admin = () => {
  return (
    <>
      <MenuList />
      <Routes>
        <Route path="/requests" element={<Requests />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default Admin;
