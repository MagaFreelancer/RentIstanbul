import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCar,
  toggleShowModal,
} from "../../redux/slices/singleInfoSlice";

import { useForm } from "react-hook-form";
import { ModalForm, SliderModal } from "../../components";
import { useTranslation } from "react-i18next";
import load from "../../assets/icons/load.webp";
import "./SinglePageModal.scss";
const list = ["Автомобиль", "Бронирование"];

const SinglePageModal = () => {
  const { t } = useTranslation();
  const { days, item, id, status } = useSelector((e) => e.singleInfo);
  const { currencies, curren } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  const [place, setPlace] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0); //для индексации страниц
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      place: "Из офиса забрать",
    },
  }); //Для собрании данных фреймворк react-hook
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }; // при нажатии на отправить

  const moneyArr = { RUB: "₽", USD: "$", TRY: "₺" };
  let money;
  let depo;
  let placePrice;
  if (currencies.length != 0) {
    switch (curren) {
      case "RUB":
        money = Math.round(item.price * currencies.USD.Value);
        depo = Math.round(item.depo * currencies.USD.Value);
        placePrice = Math.round(place * currencies.USD.Value);
        break;
      case "USD":
        money = item.price;
        depo = item.depo;
        placePrice = place;

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
      setValue("price", allPriceFormatted + moneyArr[curren]);
      setValue("days", days);
      handleSubmit(onSubmit)();
    }
  };

  const toggleModal = (e) => {
    if (
      e.target.classList.contains("modal-wrapper") ||
      e.target.closest(".modal__close") ||
      e.target.closest(".modal__inner-close")
    ) {
      dispatch(toggleShowModal(false));
      document.body.classList.remove("modal-open");
    }
  };

  React.useEffect(() => {
    getSingleCar();
  }, []);
  console.log(money, placePrice, item.price);
  if (status === "loading") {
    return (
      <div className="modal-wrapper">
        <img className="modal-wrapper__load" src={load} alt="" />
      </div>
    );
  }

  return (
    <div onClick={(e) => toggleModal(e)} className="modal-wrapper">
      <div className="modal">
        <div onClick={(e) => toggleModal(e)} className="modal__close">
          <svg
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m137.051 128 75.475-75.475c2.5-2.5 2.5-6.551 0-9.051s-6.551-2.5-9.051 0L128 118.949 52.525 43.475c-2.5-2.5-6.551-2.5-9.051 0s-2.5 6.551 0 9.051L118.949 128l-75.475 75.475a6.399 6.399 0 0 0 4.525 10.926 6.38 6.38 0 0 0 4.525-1.875L128 137.051l75.475 75.475c1.25 1.25 2.888 1.875 4.525 1.875s3.275-.625 4.525-1.875c2.5-2.5 2.5-6.551 0-9.051L137.051 128z"
              fill="#ffffff"
              className="fill-000000"
            ></path>
          </svg>
        </div>
        <div onClick={(e) => toggleModal(e)} className="modal__inner-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
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
              <div className="modal__img-adap">
                <img src={item.imageUrl} alt="car" />
              </div>
              <h4 className="modal__heading">{t("characteristics")}</h4>
              <ul className="modal__info">
                <li className="modal__info-item">
                  <div className="modal__info-heading">{t("transmission")}</div>
                  <div className="modal__info-text">{item.box}</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">{t("engine")}</div>
                  <div className="modal__info-text">{item.volume} л</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">{t("year_issue")}</div>
                  <div className="modal__info-text">{item.date}.</div>
                </li>
                <li className="modal__info-item">
                  <div className="modal__info-heading">{t("fuel")}</div>
                  <div className="modal__info-text">{item.engine}</div>
                </li>
              </ul>
              <SliderModal imgs={item.imgs} />
            </div>
            <div
              className={`modal__content ${
                activeIndex === 1 && "modal__content--active"
              }`}
            >
              <ModalForm
                errors={errors}
                setValue={setValue}
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
              <h4 className="modal__last-heading">{t("modal_price")}</h4>
              <div className="modal__block">
                <div className="modal__descr">Аренда на {days > 1 ? `${days} дней` : `${days} день`}</div>
                <span className="modal__price">
                  {priceDaysFormatted + moneyArr[curren]}
                </span>
              </div>
              <div className="modal__block modal__block--not-border">
                <div className="modal__descr">{t("modal_delivery")}</div>
                <span className="modal__price">
                  {placePrice ? placePrice : "0"}
                  {moneyArr[curren]}
                </span>
              </div>
              <div className="modal__last">
                <div className="modal__block">
                  <div className="modal__descr">{t("modal_total")}</div>
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
            <button
              // disabled={activeIndex === 1 ? !isValid : false}
              onClick={setForm}
              className="modal__submit"
            >
              {activeIndex === 0 ? `${t("modal_continue")}` : `${t("modal_send")}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageModal;
