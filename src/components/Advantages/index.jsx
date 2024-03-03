import "./Advantages.scss";
const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container advatages__container">
        <h2 className="advantages__title title">Преимущество</h2>
        <div className="advantages__content">
          <div className="advantages__col">
            <h3 className="advantages__heading">Без мелкого шрифта</h3>
            <div className="advantages__descr">
              Все условия и все цены мы держим на виду. Никаких скрытых
              платежей, сборов, налогов. Вы сразу видите конечную цену, которая
              не изменится, пока вы оформляете заказ.
            </div>
          </div>
          <div className="advantages__col">
            <h3 className="advantages__heading">Низкие депозиты</h3>
            <div className="advantages__descr">
              В международных прокатах депозиты достигают нескольких тысяч евро,
              которые блокируются на карте клиента. У нас депозиты, в среднем,
              300 евро, а есть машины и без депозита.
            </div>
          </div>
          <div className="advantages__col">
            <h3 className="advantages__heading">Честная оценка повреждений</h3>
            <div className="advantages__descr">
              Мы оцениваем повреждения в присутствии клиента. Наши цены в 2-3
              раза ниже, чем у международных прокатов. И мы никогда не списываем
              деньги с карты клиента после сдачи автомобиля.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
