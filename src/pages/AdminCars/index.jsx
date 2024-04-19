import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CarBlock,
  CarSkeleton,
  FilterBox,
  FilterCategories,
  FilterEngine,
  FilterPrice,
  FilterSort,
  FilterYears,
  ImageModal,
  Search,
  AdminModal,
} from "../../components";
import closeIcon from "../../assets/icons/close.svg";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import { fetchCars } from "../../redux/slices/carSlice";
const listSort = [
  { name: "От дешевых к дорогим", sortProperty: "-price" },
  { name: "От дорогих к дешевым", sortProperty: "price" },
];

const AdminCars = () => {
  const dispatch = useDispatch();
  const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector(
    (e) => e.singleInfo
  );
  const { items, status, currentPage } = useSelector((state) => state.car);

  const [filterOpen, setFilterOpen] = React.useState(false);
  const { currencies, statusCur } = useSelector((state) => state.currencies);
  const { categoryIds, price, yearCar, engine, box, sort, searchValue } =
    useSelector((e) => e.filter);

  const getCars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    dispatch(fetchCars({ sortBy, order, search }));
    dispatch(fetchCurrencies());
  };
  const [sortActiveObj, setSortActiveObj] = React.useState({
    name: "От дешевых к дорогим",
    sortProperty: "-price",
  }); //для obj для sortFilter
  const onChangeSort = (obj) => {
    setSortActiveObj(obj);
  };
  React.useEffect(() => {
    getCars();
  }, [searchValue, sort]);

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
            Filter
          </button>

          <main className="cars__main">
            <div className="cars__top">
              <div className="cars__heading">
                <h1 className="cars__name">Машины</h1>
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
          </main>
        </div>
      </section>
      {showModal && <AdminModal />}
      {showSlider && (
        <ImageModal sliderIndex={sliderIndex} sliderImgs={sliderImgs} />
      )}
    </>
  );
};
export default AdminCars;