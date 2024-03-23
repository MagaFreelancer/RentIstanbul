import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setYearCar } from "../../redux/slices/filterSlice";
import { useTranslation } from "react-i18next";
import closeSvg from "../../assets/icons/sm-close.svg";
const listYears = []
for (let year = 2012; year < 2024; year++) {
  listYears.push(year);
}
const FilterYears = () => {
  const inputRef = React.useRef();
  const { t } = useTranslation();
  const yearCar = useSelector((e) => e.filter.yearCar);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  
  
  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  return (
    <div className="cars__years">
      <h2 className="cars__years-title">{t("year_issue")}</h2>
      <div className="cars__search">
        <input
          ref={inputRef}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder="2000..."
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
        {listYears
          .filter((year) => {
            const stringYear = year + "+";
            if (stringYear.toLowerCase().includes(searchValue.toLowerCase())) {
              return year;
            }
          })
          .map((year) => {
            return (
              <li
                onClick={() => dispatch(setYearCar(year))}
                key={year}
                className={`cars__years-item ${
                  year === yearCar ? "cars__years-item--active" : ""
                }`}
              >
                {year + "+"}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default FilterYears;
