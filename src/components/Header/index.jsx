import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import Languages from "../Languages";
=======
import searchSvg from "../../assets/icons/search.svg";
import FavouriteSvg from "../FavouriteSvg";
import Currencies from "../Currencies";
>>>>>>> gadji_2-redux
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
              <NavLink className="header__link menu__link" to="about">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="header__funcs">
            <li className="header__item">
              <Languages />
            </li>
            
              <Currencies/>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
