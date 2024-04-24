import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandCar, setYearCar } from "../../redux/slices/filterSlice";
import closeSvg from "../../assets/icons/sm-close.svg";
const listBrand = [
  'any',
  'BMW',
  'Volvo',
  'Volkswagen',
  'Toyota',
  'Skoda',
  'Renault',
  'Peugeot',
  'Opel',
  'Mercedes-Benz',
  'Ford'
]

const FilterBrand = () => {
  const inputRef = React.useRef();
  const brandCar = useSelector((e) => e.filter.brandCar);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  
  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className="cars__years">
        <h2 className="cars__years-title">Марка автомобилей</h2>
          <div className="cars__search">
            <input
              ref={inputRef}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Ford..."
              type="text"
            />
            {searchValue && (
              <img
                onClick={onClickClear}
                className="cars__close"
                src={closeSvg}
                alt=""
              />
            )}
          </div>
          <ul className="cars__years-list">
            {listBrand
              .filter((barnd) => {
                const stringYear = barnd + "+";
                if (stringYear.toLowerCase().includes(searchValue.toLowerCase())) {
                  return barnd;
                }
              })
              .map((barnd, index) => {
                return (
                  <li
                    onClick={() => dispatch(setBrandCar(barnd))}
                    key={index}
                    className={`cars__years-item ${
                      barnd === brandCar ? "cars__years-item--active" : ""
                    }`}
                  >
                    {barnd}
                  </li>
                );
              })}
        </ul>
    </div>
  );
}
 
export default FilterBrand;