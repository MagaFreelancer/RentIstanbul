import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cars.scss";
import { fetchCars } from "../../redux/slices/carSlice";
import {CarSkeleton, CarBlock,FilterPrice, FilterYears, FilterBox, FilterEngine, FilterSort} from "../../components";

const Cars = () => {
    const { items, status } = useSelector((state) => state.car);
    const dispatch = useDispatch();
    
    const getCars = async () => {
        dispatch(fetchCars());
    };
   
    const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
    const skeletons = [...new Array(10)].map((_, index) => (
        <CarSkeleton key={index} />
    ));

    React.useEffect(() => {
        getCars();
    }, []);

  return (
    <section className="cars">
      <div className="container cars__container">

        <div className="cars__filter">
          <FilterPrice/>
          <FilterYears/>
          <FilterBox/>
          <FilterEngine/>
        </div>

        <div className="cars__top">
          <div className="cars__inner">
            <h1 className="cars__name">Машины</h1>
            <FilterSort/>
          </div>
          <div>
            <ul className="cars__list">
              {status === "success" ? cars : skeletons}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cars;
