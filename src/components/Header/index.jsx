import { Link, NavLink } from "react-router-dom";
import Languages from "../Languages";
import Currencies from "../Currencies";
import "./Header.scss";
import React from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  if(open) {
    document.body.classList.add('body-scroll');
  }else {
    document.body.classList.remove('body-scroll');
  }

  return (
    <header className="header">
      <div className="container inner">
        <Link to="/" className="header__logo logo">
          RI
        </Link>
        <nav className={`header__nav ${open ? `header__nav--active` : ''}`}>
          <ul className="header__menu menu">
            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="/">
                {t("header_home")}
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="cars">
                {t("header_cars")}
              </NavLink>
            </li>

            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="about">
                {t("header__about")}
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="admin/cars">
                admin
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className={`header__funcs ${open ? `header__funcs--active` : ''}`}>
          <li className="header__item">
            <Languages />
          </li>
            <Currencies setOpen={setOpen} />
        </ul>
        <div onClick={() => setOpen(!open)} className={`header__burger ${open ? 'header__burger--active' : ''}`}>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
