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
import { setSort } from "../../redux/slices/filterSlice";
import "./AdminCars.scss";

export const listSort = [
  { name: "По умолчанию", sortProperty: "default" },
  { name: "От дешевых к дорогим", sortProperty: "priceasc"},
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
  const { searchValue } = useSelector((e) => e.filter);
  const { items, status } = useSelector((state) => state.filterCars);

  const getCars = async () => {
    console.log(items);
    dispatch(getFilterCar({sortProperty, searchValue}));
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
  function onClickAdd() {
    const host = "https://artemwebsites.ru";
    const addUrl = host + "/api/cars";
    const token = localStorage.getItem("tokenInfo");
    const data = {
      imageUrl:
        "https://i.pinimg.com/736x/0e/55/78/0e5578828e707e5039e111d1f234e745.jpg",
      box: "automatic",
      volume: "1.3",
      date: 2015,
      engine: "Дзиель",
      title: "МашЫна",
      price: 777,
      category: "string",
      place: "4",
      imgs: ["https://99px.ru/sstorage/53/2021/12/mid_337638_766538.jpg","https://i.pinimg.com/originals/45/b3/13/45b313a119fb52694be563b6131947b3.png"],
    };
    
    axios
      .post(addUrl, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        console.log("Успешно добавлено или отправлено:", response.data);
      })
      .catch(function (error) {
        console.error("Ошибка при добавлении или отправке:", error);
      });
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
               
                <button onClick={onClickAdd} className="cars__add-button" >добавить </button>
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
