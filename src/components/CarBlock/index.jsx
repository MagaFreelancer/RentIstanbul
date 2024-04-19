import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, toggleShowModal } from "../../redux/slices/singleInfoSlice";
import { useTranslation } from "react-i18next";
import "./CarBlock.scss";
// {obj, currencies}

export default function CarBlock({id, category, date, engine, imageUrl, place, price, title, volume}) {

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { curren, currencies } = useSelector((state) => state.currencies);
  const moneyArr = { RUB: "₽", USD: "$", EUR: "€", TRY: "₺" };
  let money = 2;
  const onClickModal = () => {
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

  return (
    <div onClick={onClickModal} className="car-block">
      <div className="car-block__img">
        <img src={imageUrl} alt="car" />
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
