import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import  { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import qs from "qs";
import { useNavigate } from "react-router";
import {CarSkeleton, CarBlock, FilterPrice, FilterYears, FilterBox, FilterEngine, FilterSort, FilterCategories, Search} from "../../components";
import { setFilters } from "../../redux/slices/filterSlice";
import { listSort } from "../../components/FilterSort";
import "./Cars.scss";

const Cars = () => {
  const navigate = useNavigate();
  const { categoryIds, price, yearCar, engine, box, sort, searchValue } = useSelector((e) => e.filter);
  const { items, status } = useSelector((state) => state.car);
  const { currencies, statusCur } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  
  const getCars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchCars({sortBy, order, search}));
    dispatch(fetchCurrencies());
  };

  React.useEffect(() => {
    getCars();
  }, [searchValue, sort]);
  
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listSort.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      const price = params.price.map((item) => Number(item));
      const engine = params.engine.map((item) => {
        return {
          ...item,
          checked: JSON.parse(item.checked),
        };
      });
      
      const categoryIds = params.categoryIds.map((item) => {
        return {
          ...item,
          active: JSON.parse(item.active),
        };
      });
      dispatch(setFilters({ ...params, sort, engine, price, categoryIds }));
    }
  }, []);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryIds,
      yearCar,
      engine,
      box,
      price,
    });
    navigate(`?${queryString}`);
  }, [categoryIds, price, yearCar, engine, box, sort.sortProperty]);

  const cars = items.map((obj, index) => <CarBlock key={index} {...obj} currencies={currencies} />);
  const skeletons = [...new Array(5)].map((_, index) => (
    <CarSkeleton key={index} />
  ));

  return (
    <section className="cars">
      <div className="container cars__container">
        <aside className="cars__filter">
          <FilterPrice />
          <FilterYears />
          <FilterBox />
          <FilterEngine />
        </aside>
        <button className="cars__button-filter">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 17.25V12.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.75 10.0625V5.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 18V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 9.25V5.8125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.25 17.25V14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.25 11.25V5.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.5 12.75H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.75 9.75H14.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 14.25H19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          Filter
        </button>

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
              {status === "success" && statusCur === "success" ? cars : skeletons}
            </ul>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Cars;
