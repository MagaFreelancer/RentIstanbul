import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { setFilters } from "../../redux/slices/filterSlice";
import qs from "qs";
import { CarSkeleton, CarBlock, FilterPrice, FilterYears, FilterBox, FilterEngine, FilterSort, FilterCategories, Search} from "../../components";
import { listSort } from "../../components/FilterSort";
import { useNavigate } from "react-router-dom";
import "./Cars.scss";

const Cars = () => {
  const { items, status } = useSelector((state) => state.car);
  const { searchValue, gearboxs, categoryId, year, price, engine, sort } = useSelector((e) => e.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      
      const sort = listSort.find((obj) => obj.sortProperty === params.sort);
      const engineArr = params.engine.map((obj) => {
        return {...obj, checked: JSON.parse(obj.checked)}
      });
  
      dispatch(setFilters({...params, sort, engineArr}))
    }
  }, []);

  const getCars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchCars({sortBy, order, search}));
  };

  const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => (<CarSkeleton key={index} />));

  React.useEffect(() => {
    getCars();
  }, [searchValue, sort, price]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sort: sort.sortProperty,
      price,
      categoryId,
      year,
      gearboxs,
      engine
    });

    navigate(`?${queryString}`);
  }, [price, categoryId, year, engine, gearboxs, sort]);

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
