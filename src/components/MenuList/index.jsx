import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuList.scss";
const MenuList = () => {
  return (
    <div className="menu-list">
      <div className="container menu-list__container">
        <ul>
          <li className="menu-list__item">
            <NavLink className="menu-list__link" to="/admin/cars">
              Машины
            </NavLink>
          </li>
          <li>
            <NavLink className="menu-list__link" to="/admin/requests">
              Заявки
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
