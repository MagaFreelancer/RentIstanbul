import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Car.scss";
import FormReserv from "../../components/FormReserv";
import SingleSlider from "../../components/SingleSlider";
const Car = () => {
  const [carObj, setCarObj] = React.useState();
  const { id } = useParams();
  const [test, setTest] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const menu = ["Детали", "Бронирование"];
  React.useEffect(() => {
    async function fetchCar() {
      try {
        const { data } = await axios.get(
          `https://65b2d2a29bfb12f6eafe789c.mockapi.io/Items/${id}`
        );

        setCarObj(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCar();
  }, [id]);

  if (!carObj) {
    return <div>Загрузка...</div>;
  }
  return (
    <section className="car-page">
      <div className="container car-page__container">
        <div className="car-page__col">
          <SingleSlider carObj={carObj} />
        </div>
        <div className="car-page__col">
          <h2 className="car-page__title">{carObj.name}</h2>
          <div className="car-page__info">
            <ul className="car-page__menu">
              {menu.map((item, index) => (
                <li
                  onClick={() => {
                    setActive(index);
                    setTest(index);
                  }}
                  key={index}
                  className="car-page__menu-item"
                >
                  <button
                    className={`car-page__menu-btn ${
                      index === active ? "car-page__menu-btn--active" : ""
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="car-page__content">
              <div
                className={`car-page__block ${
                  test == 0 && "car-page__block--active"
                }`}
              >
                <ul className="car-page__params">
                  <li>
                    <span>Price</span> {carObj.price}
                  </li>
                  <li>
                    <span>Type</span> {carObj.type}
                  </li>
                  <li>
                    <span>Place</span> {carObj.place}
                  </li>
                  <li>
                    <span>date</span> {carObj.date}
                  </li>
                </ul>
              </div>
              <div
                className={`car-page__block ${
                  test == 1 && "car-page__block--active"
                }`}
              >
                <FormReserv />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Car;
