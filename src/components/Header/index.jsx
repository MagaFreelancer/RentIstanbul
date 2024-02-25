import { Link, NavLink } from "react-router-dom";
import searchSvg from "../../assets/icons/search.svg";
import FavouriteSvg from "../FavouriteSvg";
import Languages from "../Languages";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/" className="header__logo logo">
            RI
          </Link>
          <ul className="header__menu menu">
            <li className="header__item menu__item">
              <NavLink className="header__link menu__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink className="header__link menu__link" to="cars">
                Cars
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink className="header__link menu__link" to="news">
                News
              </NavLink>
            </li>
            <li className="header__item menu__item">
              <NavLink className="header__link menu__link" to="about">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="header__funcs">
            <li className="header__item">
              <button className="header__btn">
                <img src={searchSvg} alt="searchSvg" />
              </button>
            </li>
            <li className="header__item">
              <NavLink className="header__link" to="favourite">
                <FavouriteSvg />
              </NavLink>
            </li>
            <li className="header__item">
              <Languages/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
