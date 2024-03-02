import React from "react";
import { useSelector } from "react-redux";
import "./CarBlock.scss";

export default function CarBlock({imageUrl, title, price, type, id, currencies}) {
  const [favourite, setFavourite] = React.useState(false);
  const { curren } = useSelector((state) => state.currencies);
  const moneyArr = {RUB: "₽", USD: '$', TRY: "₺"};


  let money;

  switch(curren) {
    case 'RUB':
      money = Math.round(price * currencies.USD.Value);
    break;
    case 'USD':
      money = price;
    break;
    case 'TRY':
      money =  Math.round(currencies.USD.Value / (currencies.TRY.Value / 10) * price);
    break;
  }
 
  return (
    <div  className="car-block">
      <div className="car-block__img">
        <img src={imageUrl} alt="car" />
      </div>

      <h3 className="car-block__title">
        {title}
      </h3>
      <div className="car-block__type">{type}</div>

      <div className="car-block__price">{(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(money)).split(',')[0]} {moneyArr[curren]}</div>
      <button
        onClick={() => setFavourite(!favourite)}
        className="car-block__favourite"
      >
        <svg
          className={`car-block__icon ${
            favourite && "car-block__icon--active"
          }`}
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5067 15.9247L4.63504 19L5.75666 12.4863L1 7.8738L7.56419 6.92608L10.5 1L13.4358 6.92608L20 7.8738L15.2433 12.4863L16.365 19L10.5067 15.9247Z"
            stroke="#121214"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
