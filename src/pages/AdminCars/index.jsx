import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminModal,
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
} from "../../components";
import closeIcon from "../../assets/icons/close.svg";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import { getFilterCar } from "../../redux/requests/getFilterCar";
import {
  setModalStatusAdmin,
  toggleShowModal,
} from "../../redux/slices/singleInfoSlice";
import { setSort } from "../../redux/slices/filterSlice";
import "./AdminCars.scss";

export const listSort = [
  { name: "По умолчанию", sortProperty: "default" },
  { name: "От дешевых к дорогим", sortProperty: "priceasc" },
  { name: "От дорогих к дешевым", sortProperty: "pricedesc" },
];

const AdminCars = () => {
  const dispatch = useDispatch();

  const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector(
    (e) => e.singleInfo
  );
  const [filterOpen, setFilterOpen] = React.useState(false);
  const { currencies, statusCur } = useSelector((state) => state.currencies);
  const { sortProperty, name } = useSelector((e) => e.filter.sort);
  const { searchValue, box } = useSelector((e) => e.filter);
  const { items, status } = useSelector((state) => state.filterCars);

  const getCars = async () => {
    const sortBox = box === "any" ? "" : box;

    dispatch(getFilterCar({ sortProperty, searchValue, sortBox }));
    dispatch(fetchCurrencies());
  };
  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
  };
  React.useEffect(() => {
    getCars();
  }, [sortProperty, searchValue]);

  const cars = items.map((obj) => (
    <CarBlock key={obj.id} {...obj} currencies={currencies} />
  ));

  const skeletons = [...new Array(9)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  // function onClickDelete() {
  //   const host = "https://artemwebsites.ru/";
  //   const deleteUrl = host + "api/cars/3";
  //   const token = localStorage.getItem("tokenInfo");

  //   axios
  //     .delete(deleteUrl, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then(function (response) {
  //       if (response.status === 204) {
  //         console.log("Успешно удалено");
  //       } else {
  //         console.log("Успех!", response.data);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.error("Ошибка!", error);
  //     });
  // }
  
  function addModal() {
    document.body.classList.add("modal-open");
    dispatch(toggleShowModal(true));
    dispatch(setModalStatusAdmin("add"));
  }
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

                <button onClick={addModal} className="cars__add-button">
                  добавить
                </button>
                <FilterSort
                  sortActiveObj={{
                    sortProperty,
                    name,
                  }}
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
