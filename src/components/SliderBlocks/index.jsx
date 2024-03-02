import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { CarSkeleton, CarBlock } from "../../components";
<<<<<<< HEAD
import "./SliderBlocks.scss";

export default function SliderBlocks({ title }) {
  const { items, status } = useSelector((state) => state.car);

=======
import  { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import "./SliderBlocks.scss";

export default function SliderBlocks() {
  const { items, status } = useSelector((state) => state.car);
  const { currencies, statusCur } = useSelector((state) => state.currencies);
  
>>>>>>> gadji_2-redux
  const dispatch = useDispatch();


  React.useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    dispatch(fetchCurrencies());
    dispatch(fetchCars());
    window.scrollTo(0, 0);
  }
<<<<<<< HEAD
  const pizzas = items
    .slice(0, 4)
    .map((obj, index) => <CarBlock key={index} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
=======

  const cars = items.map((obj, index) => <CarBlock key={index} {...obj} currencies={currencies}/>);
  const skeletons = [...new Array(5)].map((_, index) => (
>>>>>>> gadji_2-redux
    <CarSkeleton key={index} />
  ));
  return (
    <section className="slider-block">
      <div className="container slider-block__container">
        <h2 className="slider-block__title title">{title}</h2>
        <div className="slider-block__content">
          {status === "success" && statusCur === 'success' ? cars : skeletons}
        </div>
      </div>
    </section>
  );
}
