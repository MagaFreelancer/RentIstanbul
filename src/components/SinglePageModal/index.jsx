import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCar,
  toggleShowModal,
} from "../../redux/slices/singleInfoSlice";

import { useForm } from "react-hook-form";
import { ModalForm } from "../../components";

import "./SinglePageModal.scss";
const list = ["Автомобиль", "Бронирование"];

const SinglePageModal = () => {
  const { days, item, id, status } = useSelector((e) => e.singleInfo);
  const dispatch = useDispatch();
  const [place, setPlace] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(1); //для индексации страниц
  const { register, handleSubmit } = useForm(); //Для собрании данных фреймворк react-hook
  const onSubmit = (data) => console.log(data); // при нажатии на отправить
  const iconLoad = "load...";
  const { currencies, statusCur, curren } = useSelector(
    (state) => state.currencies
  );
  const moneyArr = { RUB: "₽", USD: "$", TRY: "₺" };
  let money;
  let depo;
  let placePrice;
  switch (curren) {
    case "RUB":
      money = Math.round(item.price * currencies.USD.Value);
      depo = Math.round(item.depo * currencies.USD.Value);
      placePrice = Math.round(place * currencies.USD.Value);
      break;
    case "USD":
      money = item.price;
      depo = item.depo;
      placePrice = item.depo;

      break;
    case "TRY":
      money = Math.round(
        (currencies.USD.Value / (currencies.TRY.Value / 10)) * item.price
      );
      depo = Math.round(
        (currencies.USD.Value / (currencies.TRY.Value / 10)) * item.depo
      );
      placePrice = Math.round(
        (currencies.USD.Value / (currencies.TRY.Value / 10)) * place
      );
      break;
  }
  let priceDays = money * days;
  let allPrice = money * days + placePrice;
  const priceDaysFormatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  })
    .format(priceDays)
    .split(",")[0];
  const allPriceFormatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  })
    .format(allPrice)
    .split(",")[0];

  const getSingleCar = async () => {
    dispatch(fetchSingleCar(id));
  };
  const setForm = () => {
    if (activeIndex === 0) {
      setActiveIndex(1);
    } else {
      handleSubmit(onSubmit);
    }
  };
  React.useEffect(() => {
    getSingleCar();
  }, []);
  const toggleModal = (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      dispatch(toggleShowModal(false));
    }
  };
  if (status !== "success" && statusCur !== "success") {
    return <div className="modal-wrapper">{iconLoad}</div>;
  }

  return (
    <div onClick={(e) => toggleModal(e)} className="modal-wrapper">
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
              <h3 className="modal__title">{item.title}</h3>
              <h4 className="modal__heading">Характеристики</h4>
              <ul className="modal__info">
                <li className="modal__info-item">
                  <div className="modal__info-heading">Коробка передач</div>
                  <div className="modal__info-text">{item.type}</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Двигатель</div>
                  <div className="modal__info-text">1.3 л</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">Год выпуска</div>
                  <div className="modal__info-text">2018.</div>
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
              <ModalForm
                register={register}
                place={place}
                setPlace={(value) => setPlace(value)}
              />
            </div>
          </div>
          <div className="modal__col">
            <div className="modal__img">
              <img src={item.imageUrl} alt="car" />
            </div>
            <div className="modal__last-info">
              <h4 className="modal__last-heading">Стоимость</h4>
              <div className="modal__block">
                <div className="modal__descr">Аренда на {days} дня</div>
                <span className="modal__price">
                  {priceDaysFormatted + moneyArr[curren]}
                </span>
              </div>
              <div className="modal__block modal__block--not-border">
                <div className="modal__descr">Доставка</div>
                <span className="modal__price">
                  {money ? placePrice : "0"}
                  {moneyArr[curren]}
                </span>
              </div>
              <div className="modal__last">
                <div className="modal__block">
                  <div className="modal__descr"> Итого</div>
                  <span className="modal__price">
                    {allPriceFormatted}
                    {moneyArr[curren]}
                  </span>
                </div>
                <div className="modal__block">
                  {item.depo && (
                    <>
                      <div className="modal__descr">+ депозит</div>
                      <span className="modal__price">
                        {depo + moneyArr[curren]}
                      </span>
                    </>
                  )}
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
