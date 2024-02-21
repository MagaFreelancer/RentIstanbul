import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cars.scss";
import { fetchCars } from "../../redux/slices/carSlice";
import CarBlock from "../../components/CarBlock";
import CarSkeleton from "../../components/CarSkeleton/CarSkeleton";
import Slider from "@mui/material/Slider";

const Cars = () => {
    const minDistance = 10;

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
    const [value1, setValue1] = React.useState([350, 650]);

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
    const [yearOpen, setYearOpen] = useState(false);
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
      <div className="container cars__container">

        <div className="cars__filter">

          <div className="cars__price">
              <h2 className="cars__paragraph">Фильтр по цене</h2>
              <div className="cars__inpnumber">
                <input className="cars__min" type="number" value={value1[0]} placeholder="10 ₽"/>
                <span>-</span>
                <input className="cars__max" type="number" value={value1[1]} placeholder="1000 ₽"/>
              </div>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={value1}
                onChange={handleChange1}
                min={10}
                max={1000}
                disableSwap
              />
          </div>

          <div className="cars__years">
            <h2 className="cars__years-title">Год выпуска</h2>
            <ul className="cars__years-list">
              <li className="cars__years-item">test</li>
              <li className="cars__years-item">test</li>
              <li className="cars__years-item">test</li>
              <li className="cars__years-item">test</li>
            </ul>
          </div>

          <div className="cars__radio">
            <h2 className="cars__box">Коробка передач</h2>
            <ul>
              <li className="cars__gearbox">
                <input id="any" type="radio" defaultValue="any" name="gearbox" defaultChecked/>
                <label htmlFor="any">Любая</label>
              </li>
              <li className="cars__gearbox">
                <input id="mechanics" type="radio"  defaultValue="mechanics" name="gearbox"/>
                <label htmlFor="mechanics">Механика</label>
              </li>
              <li className="cars__gearbox">
                <input id="auto" type="radio" defaultValue="auto" name="gearbox"/>
                <label htmlFor="auto">Автомат</label>
              </li>
            </ul>
          </div>
          

          <div className="cars__engine">
            <h2 className="cars__box">Двигатель</h2>
            <ul>
                <li className="cars__gearbox">
                  <input id="petrol" type="checkbox" defaultValue="petrol" name="gearbox" defaultChecked/>
                  <label htmlFor="petrol">Бензин</label>
                </li>
                <li className="cars__gearbox">
                  <input id="diesel" type="checkbox" defaultValue="diesel" name="gearbox"/>
                  <label htmlFor="diesel">Дизель</label>
                </li>
                <li className="cars__gearbox">
                  <input id="electro" type="checkbox" defaultValue="electro" name="gearbox"/>
                  <label htmlFor="electro">Электо/Гибрид</label>
                </li>
            </ul>
          </div>
          
        </div>

        <div className="cars__top">
          <div className="cars__inner">
            <h1 className="cars__name">Машины</h1>
            <div className="cars__sort" ref={sortRef}>
              <div className="cars__label" onClick={() => setOpen(!open)}>
                Сортировать по: <span>{sort.name}</span>
              </div>
              <ul className={`cars__popup ${open ? "cars__popup--active" : ""}`}>
                {list.map((obj, index) => (
                  <li
                    onClick={() => onChangeSort(obj)}
                    key={index}
                    className={`cars__popup-item ${sort.sortProperty == obj.sortProperty ? "cars__popup-item--active" : ""}`}>
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
    </section>
  );
};

export default Cars;
