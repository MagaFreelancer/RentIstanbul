import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { CarSkeleton, CarBlock } from "../../components";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";

import "./SliderBlocks.scss";

export default function SliderBlocks({ title }) {
  const { items, status } = useSelector((state) => state.car);
  const { currencies, statusCur, curren } = useSelector(
    (state) => state.currencies
  );
  const dispatch = useDispatch();

  const getCars = async () => {
    dispatch(fetchCars("", "", ""));
    dispatch(fetchCurrencies());
  };
  React.useEffect(() => {
    getCars();
  }, [curren]);
  const cars = items
    .slice(0, 4)
    .map((obj, index) => (
      <CarBlock key={index} {...obj} currencies={currencies} />
    ));
  const skeletons = [...new Array(4)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  return (
    <section className="slider-block">
      <div className="container slider-block__container">
        <h2 className="slider-block__title title">{title}</h2>
        <div className="slider-block__content">
          {status === "success" && statusCur === "success" ? cars : skeletons}
        </div>
      </div>
    </section>
  );
}
