import React from "react";

const RequestCar = () => {
  return (
    <li className="requests__item">
      <div className="requests__col requests__col--car">
        <div className="requests__img">
          <img
            src="https://s3-eu-west-1.amazonaws.com/localrent.images/cars/image_titles/000/043/567/original/Renault-Symbol-2022-black.jpg?1683713795"
            alt=""
          />
        </div>
        <div className="requests__autoinfo">
          <div className="requests__name">Renault Symbol</div>
          <div className="requests__info">цена: 16$</div>
          <div className="requests__info">Срок: 30 дней</div>
          <div className="requests__info">Депозит: 200$</div>
          <div className="requests__info">Итого: 160$</div>
        </div>
      </div>
      <div className="requests__col requests__col--info">
        <div className="requests__user">
          <div className="requests__fullname">ФИО: Ahmet cokca</div>
          <div className="requests__userinfo">Почта: pocta24@gmail.com</div>
          <div className="requests__userinfo">Контакты: +905524213143</div>
          <div className="requests__userinfo">Дата рождения: 20.02.2001</div>
          <div className="requests__comment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga,
            doloremque maxime illo accusamus quia iure dignissimos, obcaecati
            sed error, asperiores autem necessitatibus eos excepturi mollitia
            optio earum sint esse!
          </div>
        </div>
      </div>
    </li>
  );
};

export default RequestCar;
