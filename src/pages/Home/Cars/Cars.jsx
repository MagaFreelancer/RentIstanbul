import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cars.scss";
import { fetchCars } from "../../../redux/slices/carSlice";
import CarBlock from "../../../components/CarBlock";
import CarSkeleton from "../../../components/CarSkeleton/CarSkeleton";
import Slider from "@mui/material/Slider";

//range slider
function valuetext(value) {
  return `${value}°C`;
}
//--range slider
const minDistance = 10;

const Cars = () => {
  const list = [
    { name: "цене (ASC)", sortProperty: "-price" },
    { name: "цене (DESC)", sortProperty: "price" },
    { name: "алфавиту (ASC)", sortProperty: "-title" },
    { name: "алфавиту (DESC)", sortProperty: "title" },
  ];
  const [sort, setSort] = useState({
    name: "цене (ASC)",
    sortProperty: "-price",
  });
  //range slider
  const [value1, setValue1] = React.useState([40, 60]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  //--range slider

  const { items, status } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const sortRef = React.useRef();

  const getCars = async () => {
    dispatch(fetchCars());
  };
  const onChangeSort = (obj) => {
    setSort(obj);
    setOpen(false);
  };
  const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => (
    <CarSkeleton key={index} />
  ));

  React.useEffect(() => {
    getCars();

    
    const handleClickOutside = (event) => {
      const path = event.composedPath ? event.composedPath() : event.path;
      if (!path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="cars">
      <div className="container">
        <div className="cars__inner-block">
          <div className="cars__filter">

            <div className="cars__price">
              <p className="cars__paragraph">Фильтр по цене</p>
              <div className="cars__inpnumber">
                <input className="cars__min" type="number" placeholder="10 ₽"/>
                <span>-</span>
                <input className="cars__max" type="number" placeholder="1000 ₽"/>
              </div>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
              />
            </div>

            <div className="cars__years">
              <p className="cars__years-title">Год выпуска</p>

              <select className="cars__select">
                <option value="" defaultChecked>
                  1970+
                </option>
                <option value="">test</option>
                <option value="">test</option>
                <option value="">test</option>
              </select>
            </div>

            <ul className="cars__radio" action="">
              <p className="cars__box">Коробка передач</p>
              <li className="cars__gearbox">
                <input
                  id="any"
                  type="radio"
                  defaultValue="any"
                  name="gearbox"
                  defaultChecked
                />
                <label htmlFor="any">Любая</label>
              </li>
              <li className="cars__gearbox">
                <input
                  id="mechanics"
                  type="radio"
                  defaultValue="mechanics"
                  name="gearbox"
                />
                <label htmlFor="mechanics">Механика</label>
              </li>
              <li className="cars__gearbox">
                <input
                  id="auto"
                  type="radio"
                  defaultValue="auto"
                  name="gearbox"
                />
                <label htmlFor="auto">Автомат</label>
              </li>
            </ul>

            <ul className="cars__engine" action="">
              <p className="cars__box">Двигатель</p>
              <li className="cars__gearbox">
                <input
                  id="petrol"
                  type="checkbox"
                  defaultValue="petrol"
                  name="gearbox"
                  defaultChecked
                />
                <label htmlFor="petrol">Бензин</label>
              </li>
              <li className="cars__gearbox">
                <input
                  id="diesel"
                  type="checkbox"
                  defaultValue="diesel"
                  name="gearbox"
                />
                <label htmlFor="diesel">Дизель</label>
              </li>
              <li className="cars__gearbox">
                <input
                  id="electro"
                  type="checkbox"
                  defaultValue="electro"
                  name="gearbox"
                />
                <label htmlFor="electro">Электо/Гибрид</label>
              </li>
            </ul>
          </div>
          <div className="cars__block">
            <div className="cars__inner">
              <h1 className="cars__name">Машины</h1>
              <div className="cars__sort" ref={sortRef}>
                <div className="cars__label" onClick={() => setOpen(!open)}>
                  Сортировать по: <span>{sort.name}</span>
                </div>
                <ul
                  className={`cars__popup ${open ? "cars__popup--active" : ""}`}
                >
                  {list.map((obj, index) => (
                    <li
                      onClick={() => onChangeSort(obj)}
                      key={index}
                      className={`cars__popup-item ${
                        sort.sortProperty == obj.sortProperty
                          ? "cars__popup-item--active"
                          : ""
                      }`}
                    >
                      {obj.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ul className="cars__list">
                {status === "success" ? cars : skeletons}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
