import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setCurrentPage } from "../../redux/slices/carSlice";
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
import { setSort } from "../../redux/slices/filterSlice";

import "./Cars.scss";

const listSort = [
  { name: ["from_expensive", "От дешевых к дорогим"], sortProperty: "-price" },
  { name: ["from_cheap", "От дорогих к дешевым"], sortProperty: "price" },
];

const Cars = () => {
  const { t } = useTranslation();
  const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector(
    (e) => e.singleInfo
  );
  const navigate = useNavigate();
  const { categoryIds, price, yearCar, engine, box, sort, searchValue } =
    useSelector((e) => e.filter);
  const { items, status, currentPage } = useSelector((state) => state.car);
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
    dispatch(fetchCars({ sortBy, order, search, currentPage2 }));
    dispatch(fetchCurrencies());
  };

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  React.useEffect(() => {
    getCars();
  }, [searchValue, sort, currentPage]);

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

  const cars = items.map((obj, index) => (
    <CarBlock key={index} {...obj} currencies={currencies} />
  ));
  const skeletons = [...new Array(9)].map((_, index) => (
    <CarSkeleton key={index} />
  ));

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
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 17.25V12.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.75 10.0625V5.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 18V12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 9.25V5.8125"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.25 17.25V14.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.25 11.25V5.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.5 12.75H9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.75 9.75H14.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15 14.25H19.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg> */}
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
            </div>
            <Pagination
              onChangePage={(number) => dispatch(setCurrentPage(number))}
            />
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
