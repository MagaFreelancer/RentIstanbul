import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { CarSkeleton, CarBlock } from "../../components";
import "./SliderBlocks.scss";

export default function SliderBlocks({ title }) {
  const { items, status } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    dispatch(fetchCars());
    window.scrollTo(0, 0);
  }
  const pizzas = items
    .slice(0, 4)
    .map((obj, index) => <CarBlock key={index} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  return (
    <section className="slider-block">
      <div className="container slider-block__container">
        <h2 className="slider-block__title title">{title}</h2>
        <div className="slider-block__content">
          {status === "success" ? pizzas : skeletons}
        </div>
      </div>
    </section>
  );
}
