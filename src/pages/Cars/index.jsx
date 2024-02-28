import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import qs from "qs";
import { setCategoryId, setFilters } from "../../redux/slices/filterSlice";
import "./Cars.scss";

import { CarSkeleton, CarBlock, FilterPrice, FilterYears, FilterBox, FilterEngine, FilterSort, FilterCategories, Search} from "../../components";
const Cars = () => {
  const { items, status } = useSelector((state) => state.car);
  const searchValue = useSelector((e) => e.filter.searchValue);
  const sortValue = useSelector((e) => e.filter.sort.sortProperty);
  const dispatch = useDispatch();

  const params = {searchValue, sortValue};

  const getCars = async () => {
    dispatch(fetchCars(params));
  };

  const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => (<CarSkeleton key={index} />));

  React.useEffect(() => {
    getCars();
  }, [searchValue, sortValue]);

  return (
    <section className="cars">
      <div className="container cars__container">
        <aside className="cars__filter">
          <FilterPrice />
          <FilterYears />
          <FilterBox />
          <FilterEngine />
        </aside>

        <main className="cars__main">
          <div className="cars__top">
            <div className="cars__heading">
              <h1 className="cars__name">Машины</h1>
              <FilterSort />
            </div>
            <Search />

            <FilterCategories />
          </div>
          <div>
            <ul className="cars__content">
              {status === "success" ? cars : skeletons}
            </ul>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Cars;
