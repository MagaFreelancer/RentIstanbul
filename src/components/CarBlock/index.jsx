import React from "react";
import "./CarBlock.scss";
import { OpenContext } from "../../pages/Home";
export default function CarBlock({
  imageUrl,
  title,
  price,
  type,
  //   place,
  //   date,
  id,
}) {
  const setOpen = React.useContext(OpenContext);

  return (
    <div onClick={setOpen} className="car-block">
      <div className="car-block__img">
        <img src={imageUrl} alt="car" />
      </div>
      <h3 className="car-block__title">{title}</h3>
      <div className="car-block__type">{type}</div>

      <div className="car-block__price">{price} ₽</div>
    </div>
  );
}
