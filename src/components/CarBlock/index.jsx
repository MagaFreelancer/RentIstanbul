import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId, toggleShowModal } from "../../redux/slices/singleInfoSlice";
import "./CarBlock.scss";

export default function CarBlock({
  imageUrl,
  title,
  price,
  type,
  id,
  currencies,
}) {
  const dispatch = useDispatch();

  const { curren } = useSelector((state) => state.currencies);
  const moneyArr = { RUB: "₽", USD: "$", TRY: "₺" };
  let money;
  const onClickModal = () => {
    dispatch(toggleShowModal(true));
    dispatch(setId(id));
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
  }

  return (
    <div onClick={onClickModal} className="car-block">
      <div className="car-block__img">
        <img src={imageUrl} alt="car" />
      </div>

      <h3 className="car-block__title">{title}</h3>
      <div className="car-block__type">{type}</div>

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
