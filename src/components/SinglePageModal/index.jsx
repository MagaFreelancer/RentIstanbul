import React, { useEffect } from "react";
import Select from "react-select";
import { OpenContext } from "../../pages/Home";
import { useForm } from "react-hook-form";
import "./SinglePageModal.scss";
const SinglePageModal = ({ title, engine, year, imgs, price }) => {
  const [value, onChange] = React.useState(new Date());
  const closeModal = React.useContext(OpenContext); // Положение true/false модального окна
  const options = [
    { value: 100, label: "Доставка по городу + 25€" },
    { value: 0, label: "Взять в из офиса" },
  ];
  const [place, setPlace] = React.useState(null);

  const { register, handleSubmit } = useForm(); //Для собрании данных фреймворк react-hook

  const onSubmit = (data) => console.log(data); // при нажатии на отправить

  const [activeIndex, setActiveIndex] = React.useState(1); //для индексации страниц
  const list = ["Автомобиль", "Бронирование"];

  const handleChange = (obj) => {
    //при изменении select получение
    setPlace(obj.value);
  };

  const setForm = () => {
    if (activeIndex === 0) {
      setActiveIndex(1);
    }
    {
      handleSubmit(onSubmit);
    }
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal__container">
          <div className="modal__col">
            <ul className="modal__menu">
              {list.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`modal__item ${
                    activeIndex === index && "modal__item--active"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div
              className={`modal__content ${
                activeIndex === 0 && "modal__content--active"
              }`}
            >
              <h3 className="modal__title">Fiat Doblo</h3>
              <h4 className="modal__heading">Характеристики</h4>
              <ul className="modal__info">
                <li className="modal__info-item">
                  <div className="modal__info-heading">Коробка передач</div>
                  <div className="modal__info-text">Механическая</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Двигатель</div>
                  <div className="modal__info-text">1.3 л</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Год выпуска</div>
                  <div className="modal__info-text">2017 — 2019 г.</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Коробка передач</div>
                  <div className="modal__info-text">Механическая</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Двигатель</div>
                  <div className="modal__info-text">1.3 л</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Год выпуска</div>
                  <div className="modal__info-text">2017 — 2019 г.</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Коробка передач</div>
                  <div className="modal__info-text">Механическая</div>
                </li>
              </ul>
              <div className="modal__slider">
                <img
                  src="https://s3-eu-west-1.amazonaws.com/localrent.images/images/files/000/129/454/show/02.jpg?1700513387"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`modal__content ${
                activeIndex === 1 && "modal__content--active"
              }`}
            >
              <form className="modal__form">
                <h5 className="modal__form-title">Получение</h5>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Доставка"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "" : "#e7e8ea",
                      fontSize: 18,
                      fontWeight: 400,
                    }),
                  }}
                  options={options}
                  onChange={(e) => handleChange(e)}
                />
                <input type="text" placeholder="Адрес доставки" />
                <input type="text" placeholder="Сроки аренды" />
                <textarea className="modal__field" placeholder="Комментарий" />
                <h5 className="modal__form-title">Отправить в</h5>
                <div className="modal__form-col">
                  <label>
                    Whatsapp
                    <input name="socials" type="radio" />
                  </label>
                  <label>
                    Telegramm
                    <input name="socials" type="radio" />
                  </label>
                  <label>
                    Vk
                    <input name="socials" type="radio" />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="modal__col">
            <div className="modal__img">
              <img
                src="https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/039/561/original/Fiat-Doblo-2018-gray.jpg?1700543366"
                alt="car"
              />
            </div>
            <div className="modal__last-info">
              <h4 className="modal__last-heading">Стоимость</h4>
              <div className="modal__block">
                <div className="modal__descr">Аренда на 32 дня</div>
                <span className="modal__price"> 470,40€</span>
              </div>
              <div className="modal__block modal__block--not-border">
                <div className="modal__descr">Доставка</div>
                <span className="modal__price"> 100€</span>
              </div>
              <div className="modal__last">
                <div className="modal__block">
                  <div className="modal__descr"> Итого</div>
                  <span className="modal__price"> 570,40€</span>
                </div>
                <div className="modal__block">
                  <div className="modal__descr">+ депозит</div>
                  <span className="modal__price"> 750€</span>
                </div>
              </div>
            </div>
            <button onClick={setForm} className="modal__submit">
              {activeIndex === 0 ? "Продолжить" : "Отправить"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageModal;
