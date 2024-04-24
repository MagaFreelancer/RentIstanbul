import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import qs from "qs";
import { useNavigate } from "react-router";
import {
  SinglePageModal,
  CarSkeleton,
  CarBlock,
  FilterPrice,
  FilterYears,
  FilterBox,
  FilterEngine,
  FilterSort,
  FilterCategories,
  Search,
  ImageModal,
} from "../../components";
import { setFilters } from "../../redux/slices/filterSlice";
import closeIcon from "../../assets/icons/close.svg";
import Pagination from "../../components/Pagintation";
import { useTranslation } from "react-i18next";
import { getFilterCar } from "../../redux/requests/getFilterCar";
import { setSort } from "../../redux/slices/filterSlice";
import "./Cars.scss";
import FilterBrand from "../../components/FilterBrand";
import EmptyCars from "../../components/EmptyCars";

const listSort = [
  { name: "По умолчаию", sortProperty: "default" },
  { name: "От дешевых к дорогим", sortProperty: "priceasc" },
  { name: "От дорогих к дешевым", sortProperty: "pricedesc" }
];

const Cars = () => {
  const { t } = useTranslation();
  const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector(
    (e) => e.singleInfo
  );
  const navigate = useNavigate();
  const { categoryIds, price, yearCar, engine, box, sort, searchValue } =
    useSelector((e) => e.filter);
  const { items, status, currentPage } = useSelector(
    (state) => state.filterCars
  );
  const { currencies, statusCur } = useSelector((state) => state.currencies);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const dispatch = useDispatch();

  const sortActiveObj = useSelector((e) => e.filter.sort); //для obj для sortFilter
  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
  };
  if (filterOpen) {
    document.body.classList.add("body-scroll");
  } else {
    document.body.classList.remove("body-scroll");
  }

  const getCars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const currentPage2 = currentPage ? `page=${currentPage}` : "";
    const sortBox = box === 'any' ? '' : box;

    dispatch(fetchCurrencies());
    dispatch(getFilterCar({sortProperty: sort.sortProperty, searchValue, sortBox}));
  };

  React.useEffect(() => {
    getCars();
  }, [searchValue, sort, currentPage, box]);

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

      dispatch(setFilters({ ...params, sort, engine, price, categoryIds, box }));
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

  const cars = items.map((obj) => (
    <CarBlock key={obj.id} {...obj} currencies={currencies} />
  ));
  const skeletons = [...new Array(9)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  const emptyCar = cars.length <= 0 ? <EmptyCars/> : '';
  const togglePagin = cars.length >= 1 ? <Pagination onChangePage={(number) => dispatch(setCurrentPage(number))}/> : '';

  return (
    <>
      <section className="cars">
        <div className="container cars__container">
          <aside
            className={`cars__filter ${
              filterOpen ? "cars__filter--active" : ""
            }`}
          >
            <FilterPrice />
            <FilterBrand/>
            <FilterYears />
            <FilterBox />
            <FilterEngine />
            <button
              onClick={() => setFilterOpen(false)}
              className={`cars__burger ${
                filterOpen ? `cars__burger--active` : ""
              }`}
            >
              <img className="cars__burger-icon" src={closeIcon} alt="" />
            </button>
          </aside>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="cars__button-filter"
          >
            Filter
          </button>

          <main className="cars__main">
            <div className="cars__top">
              <div className="cars__heading">
                <h1 className="cars__name">{t("header_cars")}</h1>
                <FilterSort
                  sortActiveObj={sortActiveObj}
                  listSort={listSort}
                  onChangeSort={(value) => onChangeSort(value)}
                />
              </div>
              <Search />

              <FilterCategories />
            </div>
            <div>
              <ul className="cars__content">
                {status === "success" && statusCur === "success"
                  ? cars
                  : skeletons}
                   
              </ul>
              {emptyCar}
            </div>
            {togglePagin}
          </main>
        </div>
      </section>
      {showModal && <SinglePageModal />}
      {showSlider && (
        <ImageModal sliderIndex={sliderIndex} sliderImgs={sliderImgs} />
      )}
    </>
  );
};

export default Cars;


