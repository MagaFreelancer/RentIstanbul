import React from "react";

const RequestCar = ({
  id,
  address,
  comment,
  fullName,
  dateBirth,
  email,
  numberPhone,
  social,
  totalPrice,
  days,
  applicationDate,
  title,
  year,
  img,
  depo,
}) => {
  return (
    <li className="requests__item">
      <div className="requests__col requests__col--car">
        <div className="requests__img">
          <img src={img} alt="" />
        </div>
        <div className="requests__autoinfo">
          <div className="requests__name">{title}</div>
          <div className="requests__info">цена: {totalPrice / days}</div>
          <div className="requests__info">Срок: {days} дней</div>
          <div className="requests__info">Депозит: {depo}</div>
          <div className="requests__info">Итого: {totalPrice}</div>
        </div>
      </div>
      <div className="requests__col requests__col--info">
        <div className="requests__user">
          <div className="requests__fullname">ФИО: {fullName}</div>
          <div className="requests__userinfo">Почта: {email}</div>
          <div className="requests__userinfo">Контакты: {numberPhone}</div>
          <div className="requests__userinfo">Дата рождения:{dateBirth}</div>
          <div className="requests__comment">{comment}</div>
        </div>
      </div>
    </li>
  );
};

export default RequestCar;
