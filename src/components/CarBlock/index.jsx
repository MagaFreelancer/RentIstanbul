import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, toggleShowModal } from "../../redux/slices/singleInfoSlice";
import { useTranslation } from "react-i18next";
import "./CarBlock.scss";
// {obj, currencies}

export default function CarBlock(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { curren } = useSelector((state) => state.currencies);
  const moneyArr = { RUB: "₽", USD: "$", EUR: "€", TRY: "₺" };
  let money;
  const onClickModal = () => {
    dispatch(setId(props.obj.id));
    document.body.classList.add("modal-open");
    dispatch(toggleShowModal(true));
  };
  
  switch (curren) {
    case "RUB":
      money = Math.round(props.obj.price * props.currencies.USD.Value);
      break;
    case "USD":
      money = props.obj.price;
      break;
    case "TRY":
      money = Math.round(
        (currencies.USD.Value / (props.currencies.TRY.Value / 10)) * props.obj.price
      );
    break;
    case "EUR":
      money = Math.round((props.currencies.USD.Value / props.currencies.EUR.Value) * props.obj.price);
    break;
  }

  return (
    <div onClick={onClickModal} className="car-block">
      <div className="car-block__img">
        <img src={props.obj.imageUrl} alt="car" />
      </div>

      <h3 className="car-block__title">{props.obj.title}</h3>
      <div className="car-block__type">{props.obj.category}</div>

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
