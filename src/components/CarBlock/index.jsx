import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, toggleShowModal,setModalStatusAdmin } from "../../redux/slices/singleInfoSlice";
import { useTranslation } from "react-i18next";
import "./CarBlock.scss";
// {obj, currencies}

export default function CarBlock({ id, mainImg, title, price, category }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { curren, currencies } = useSelector((state) => state.currencies);
  const moneyArr = { RUB: "₽", USD: "$", EUR: "€", TRY: "₺" };
  let money = 2;
  const onClickModal = () => {
    dispatch(setModalStatusAdmin("edit"));
    dispatch(setId(id));
    document.body.classList.add("modal-open");
    dispatch(toggleShowModal(true));
  };

  switch (curren) {
    case "RUB":
      money = Math.round(price * currencies.USD.Value);
      break;
    case "USD":
      money = price;
      break;
    case "TRY":
      money = Math.round(
        (currencies.USD.Value / (currencies.TRY.Value / 10)) * price
      );
      break;
    case "EUR":
      money = Math.round((currencies.USD.Value / currencies.EUR.Value) * price);
      break;
  }

  //https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/041/378/original/MG-ZS-2020-red_(1).jpg?1680090691

  return (
    <div onClick={onClickModal} className="car-block">
      <div className="car-block__img">
        <img src={mainImg} alt="car" />
      </div>

      <h3 className="car-block__title">{title}</h3>
      <div className="car-block__type">{category}</div>

      <div className="car-block__price">
        {
          new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
            .format(money)
            .split(",")[0]
        }
        {moneyArr[curren]}
      </div>
    </div>
  );
}
