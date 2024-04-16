import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, toggleShowModal } from "../../redux/slices/singleInfoSlice";
import { useTranslation } from "react-i18next";
import "./CarBlock.scss";


export default function CarBlock({obj, currencies}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { curren } = useSelector((state) => state.currencies);
  const moneyArr = { RUB: "₽", USD: "$", EUR: "€", TRY: "₺" };
  let money;
  const onClickModal = () => {
    dispatch(toggleShowModal(true));
    dispatch(setId(obj.id));
    document.body.classList.add("modal-open");

  };
  
  switch (curren) {
    case "RUB":
      money = Math.round(obj.price * currencies.USD.Value);
      break;
    case "USD":
      money = obj.price;
      break;
    case "TRY":
      money = Math.round(
        (currencies.USD.Value / (currencies.TRY.Value / 10)) * obj.price
      );
    break;
    case "EUR":
      money = Math.round((currencies.USD.Value / currencies.EUR.Value) * obj.price);
    break;
  }

  return (
    <div onClick={onClickModal} className="car-block">
      <div className="car-block__img">
        <img src={obj.imageUrl} alt="car" />
      </div>

      <h3 className="car-block__title">{obj.title} {obj.carModel}</h3>
      <div className="car-block__type">{obj.category}</div>

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
