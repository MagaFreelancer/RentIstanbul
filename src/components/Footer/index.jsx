import React from "react";
import { NavLink, Link } from "react-router-dom";
import vkSvg from "../../assets/icons/vk.svg";
import whatsappSvg from "../../assets/icons/whatsapp.svg";
import telegramSvg from "../../assets/icons/telegram.svg";
import instagramSvg from "../../assets/icons/instagram.svg";
import rightArrowSvg from "../../assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

function Footer() {
    const { t } = useTranslation();
    const [emailValue, setEmailValue] = React.useState("");

    // const instagramURL = "";
    // const whatsappURL = "";
    // const vkURL = "";
    // const telegrammURL = "";

    return (
        <footer className="footer">
            <div className="container footer__innder">
                <ul className="footer__catalog">
                    <h5 className="footer__title">{t("footer_information")}</h5>
                    <li className="footer__catalog-item">
                        <NavLink className="footer__catalog-link" to="/">{t("header_home")}</NavLink>
                    </li>  
                    <li >
                        <NavLink className="footer__catalog-link" to="/cars">{t("header_cars")}</NavLink>
                    </li>
                    <li className="footer__catalog-item">
                        <NavLink className="footer__catalog-link" to="/about">{t("header__about")}</NavLink>
                    </li>
                    <li className="footer__catalog-item">
                        <NavLink className="footer__catalog-link footer__catalog-logo" to="/about">RL</NavLink>
                    </li>
                </ul>
                <ul className="footer__contacts">
                    <h5 className="footer__title">{t("footer_contacts")}</h5>
                    <li className="footer__contacts-item">
                        <a className="footer__contacts-link" href="mailto: rendIstanbul@gmail.com">rentIstanbul@gmail.com</a>
                    </li>
                    <li className="footer__contacts-item">
                        <a className="footer__contacts-tel" href="tel:+4733378901">+47 333 78 901</a>
                    </li>
                    <li className="footer__contacts-item footer__contacts-icons">
                        <a className="footer__contacts-icon" href="#"><img src={telegramSvg} alt="" /></a>
                        <a className="footer__contacts-icon" href="#"><img src={whatsappSvg} alt="" /></a>
                        <a className="footer__contacts-icon" href="#"><img src={vkSvg} alt="" /></a>
                        <a className="footer__contacts-icon" href="#"><img src={instagramSvg} alt="" /></a>
                       
                    </li>
                </ul>
                <form className="footer__form">
                    <h5 className="footer__title">{t("footer_subscription")}</h5>
                    <p className="footer__subtitle">{t("stay_discounts")}</p>
                    <input className="footer__form-input" placeholder="Ваш email" type="text" />
                    <p className="footer__form-text">{t("footer_person")}</p>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
