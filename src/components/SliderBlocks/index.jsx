import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { CarSkeleton, CarBlock } from "../../components";
import  { fetchCurrencies } from "../../redux/slices/currenciesSlice";

import "./SliderBlocks.scss";

export default function SliderBlocks() {
  const { items, status } = useSelector((state) => state.car);
  
  const dispatch = useDispatch();


  React.useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    dispatch(fetchCurrencies());
    dispatch(fetchCars());
    window.scrollTo(0, 0);
  }

  const cars = items.map((obj, index) => <CarBlock key={index} {...obj}/>);
  const skeletons = [...new Array(5)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  return (
    <section className="slider-block">
      <div className="container slider-block__container">
        <h2 className="slider-block__title">Аренд машин</h2>
        <div className="slider-block__content">
          {status === "success" ? cars : skeletons}
        </div>
      </div>
    </section>
  );
}
