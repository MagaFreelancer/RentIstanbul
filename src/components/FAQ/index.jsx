import React from "react";
import closeSvg from "../../assets/icons/close.svg";
import "./FAQ.scss";
import whatsappSvg from "../../assets/icons/whatsapp.svg";
import telegramSvg from "../../assets/icons/telegram.svg";
import chatSvg from "../../assets/icons/chat.png";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState("");
  const questions = [
    {
      title: "Для аренды авто на вашем сайте нужна 100% предоплата?",
      text: "Чтобы забронировать автомобиль на нашем сайте, нужно внести только небольшой аванс – 15-20% от общей стоимости аренды. После предоплаты на указанный электронный адрес придет ваучер с детализацией заказа. Оставшуюся сумму вы доплачиваете при получении машины. Доступные способы оплаты остатка указаны в карточке авто и в вашем ваучере.",
    },
    {
      title: "Какие документы потребуются для получения машины?",
      text: "При получении автомобиля вам понадобится паспорт, национальное водительское удостоверение, международное водительское удостоверение (если требуется, в зависимости от страны) и ваучер аренды авто, который вы получаете после оплаты заказа (можно в электронном виде).",
    },
    {
      title: "Для аренды авто на вашем сайте нужна 100% предоплата?",
      text: "Чтобы забронировать автомобиль на нашем сайте, нужно внести только небольшой аванс – 15-20% от общей стоимости аренды. После предоплаты на указанный электронный адрес придет ваучер с детализацией заказа. Оставшуюся сумму вы доплачиваете при получении машины. Доступные способы оплаты остатка указаны в карточке авто и в вашем ваучере.",
    },
    {
      title: "Какие документы потребуются для получения машины?",
      text: "При получении автомобиля вам понадобится паспорт, национальное водительское удостоверение, международное водительское удостоверение (если требуется, в зависимости от страны) и ваучер аренды авто, который вы получаете после оплаты заказа (можно в электронном виде).",
    },
    {
      title: "Нужно ли оформлять международные права?",
      text: "Это зависит от требований ПДД той страны, где вы хотите арендовать авто. Изучить информацию по выбранному региону можно в условиях бронирования.",
    },
  ];

  function toggleActive(e) {
    e.target.closest(".faq__item").classList.toggle("faq__item--active");
  }
  const questionBlocks = questions.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <section className="faq">
      <div className="container faq__container">
        <h2 className="faq__title title">F.A.Q.</h2>
        <div className="faq__content">
          <div className="faq__col">
            <div className="faq__search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder={t("international_law")}
              />
            </div>
            <ul className="faq__list">
              {questionBlocks.length === 0 ? (
                <div className="faq__notfound">нету результатов...</div>
              ) : (
                questionBlocks.map((item, index) => (
                  <li
                    onClick={(e) => toggleActive(e)}
                    key={index}
                    className={`faq__item `}
                  >
                    <div className="faq__close">
                      <img src={closeSvg} alt="close" />
                    </div>
                    <h5 className="faq__heading">{item.title}</h5>
                    <p className="faq__text">{item.text}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="faq__col faq__col--social">
            <h3 className="faq__head">
              Остались вопросы?
              <br />
              Задай их в чате
            </h3>
            <p className="faq__descr">
              Напиши нам в TELEGRAM / Whatsapp. Наш специалист ответит в
              ближайшее время
            </p>
            <div className="faq__links">
              <a className="faq__link" href="#">
                <img
                  className="faq__img--telegram"
                  src={telegramSvg}
                  alt="telegram"
                />
                Telegram
              </a>
              <a className="faq__link" href="#">
                <img className="faq__img" src={whatsappSvg} alt="whatsapp" />
                Whatsapp
              </a>
            </div>
            <div className="faq__bg-img">
              <img src={chatSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
