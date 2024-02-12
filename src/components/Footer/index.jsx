import React from "react";
import { NavLink, Link } from "react-router-dom";
import vkSvg from "../../assets/icons/vk.svg";
import whatsappSvg from "../../assets/icons/whatsapp.svg";
import telegramSvg from "../../assets/icons/telegram.svg";
import instagramSvg from "../../assets/icons/instagram.svg";
import rightArrowSvg from "../../assets/icons/arrow-right.svg";
import "./Footer.scss";
function Footer() {
  const [emailValue, setEmailValue] = React.useState("");

  // const instagramURL = "";
  // const whatsappURL = "";
  // const vkURL = "";
  // const telegrammURL = "";

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__col">
          <ul className="footer__menu">
            <li className="footer__item">
              <h3 className="footer__heading">Информация</h3>
            </li>
            <li className="footer__item menu__item">
              <NavLink className="footer__link menu__link" to="/">
                Home
              </NavLink>
            </li>
            <li className="footer__item menu__item">
              <NavLink className="footer__link menu__link" to="cars">
                Cars
              </NavLink>
            </li>
            <li className="footer__item menu__item">
              <NavLink className="footer__link menu__link" to="news">
                News
              </NavLink>
            </li>
            <li className="footer__item menu__item">
              <NavLink className="footer__link menu__link" to="about">
                About
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="footer__logo">
            RI
          </Link>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Контакты</h3>
          <div className="footer__col-block">
            <a href="mailto: rendIstanbul@gmail.com" className="footer__email">
              rentIstanbul@gmail.com
            </a>
            <a className="footer__tel" href="tel:+4733378901">
              +47 333 78 901
            </a>
          </div>
          <div className="footer__col-block">
            <h4 className="footer__heading-sm">Мессенджеры</h4>
            <ul className="footer__mess socials">
              <li className="footer__mess-item  socials__item">
                <a href="#" className="footer__mess-link">
                  <img src={telegramSvg} alt="telegram" />
                </a>
              </li>
              <li className="footer__mess-item  socials__item">
                <a href="#" className="footer__mess-link">
                  <img src={whatsappSvg} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col-block">
            <h4 className="footer__heading-sm">Наши соц.сети</h4>
            <ul className="footer__social socials ">
              <li className="footer__mess-item socials__item">
                <a
                  href="#"
                  className="footer__mess-link footer__mess--instagram"
                >
                  <img src={instagramSvg} alt="instagram" />
                </a>
              </li>
              <li className="footer__mess-item socials__item">
                <a href="#" className="footer__mess-link">
                  <img src={vkSvg} alt="vk" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Подписка на новости</h3>
          <span className="footer__descr">
            Будьте в курсе скидок и новостей
          </span>
          <form action="" className="footer__form">
            <input
              className="footer__field"
              type="text"
              placeholder="Ваш email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            {emailValue && (
              <button className="footer__btn">
                <img src={rightArrowSvg} alt="" />
              </button>
            )}
          </form>
          <p className="footer__text">
            Подписываясь на рассылку вы соглашатесь с обработкой персональных
            данных
          </p>
          <Link className="footer__copyright" to="copyright">
            Политика конфиденциальности
          </Link>
          <Link className="footer__copyright" to="copyright">
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
