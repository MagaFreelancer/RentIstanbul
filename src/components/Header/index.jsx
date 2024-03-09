import { Link, NavLink } from "react-router-dom";
import Languages from "../Languages";
import Currencies from "../Currencies";
import "./Header.scss";
import React from "react";

function Header() {
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
                Home
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="cars">
                Cars
              </NavLink>
            </li>

            <li className="header__item menu__item">
              <NavLink onClick={() => setOpen(false)} className="header__link menu__link" to="about">
                About
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
