import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Car.scss";

const Car = () => {
  const [carObj, setCarObj] = React.useState();
  const [activeImg, setActivrImg] = React.useState(0);
  const { id } = useParams();

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
          <div className="car-page__imgs">
            <div className="car-page__big-image">
              <img src={carObj.imgs[activeImg]} alt="car" />
            </div>
            <div className="car-page__sm-image">
              {carObj.imgs.map((src, index) => (
                <img
                  onClick={() => {
                    setActivrImg(index);
                  }}
                  key={index}
                  src={src}
                  alt="car"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="car-page__col">
          <h2 className="car-page__title">{carObj.name}</h2>

          <div className="car-page__info">
            <h4 className="car-page__heading">Детали</h4>
            <ul>
              <li className="car-page__item">
                <span>Price</span> {carObj.price}
              </li>
              <li className="car-page__item">
                <span>Type</span> {carObj.type}
              </li>
              <li className="car-page__item">
                <span>Place</span> {carObj.place}
              </li>
              <li className="car-page__item">
                <span>date</span> {carObj.date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Car;
