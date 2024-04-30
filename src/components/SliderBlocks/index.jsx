import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CarSkeleton, CarBlock } from "../../components";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getCarsNodFilter } from "../../redux/requests/getCars";
import "./SliderBlocks.scss";

const params = {
  0: ["luxy", "Люкс"],
  1: ["compact", "Компактные"],
  2: ["middle", "Средний класс"],
};
export default function SliderBlocks({ category }) {
  const { t } = useTranslation();
  const { currencies, statusCur, curren } = useSelector((state) => state.currencies);
  const { items, status } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
 
  const getCars = async () => {
    dispatch(fetchCurrencies());
    dispatch(getCarsNodFilter());
  };

  React.useEffect(() => {
    getCars();
  }, [curren]);
  
  const cars = items
    .filter((item) => item.category === params[category][0])
    .slice(0, 4)
    .map((obj) => (
      <CarBlock key={obj.id} {...obj} />
  ));

  const skeletons = [...new Array(4)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  
  return (
    <section className="slider-block">
      <div className="container slider-block__container">
        <div className="slider-block__heading">
          <h2 className="slider-block__title title">{params[category][1]}</h2>
          <Link to="/cars" className="slider-block__link">
            {t("more_cars")}
          </Link>
        </div>
        <div className="slider-block__content">
          {status === "success" && statusCur === "success" ? cars : skeletons}
        </div>
      </div>
    </section>
  );
}
