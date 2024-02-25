import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEngine } from "../../redux/slices/filterSlice";

const FilterEngine = () => {
  const engine = useSelector((e) => e.filter.engine);
  const dispatch = useDispatch();

  const list = [
    { gearbox: "petrol", title: "Бензин" },
    { gearbox: "diesel", title: "Дизель" },
    { gearbox: "electro", title: "Электо/Гибрид" },
  ];

  const onChangeCheckbox = (title) => {   
    dispatch(setEngine(title));
  };

  return (
    <div className="cars__engine">
      <h2 className="cars__box">Двигатель</h2>
      <ul>
        {list.map((obj, index) => {
          return (
            <li key={index} className="cars__gearbox">
              <label className="cars__gearbox-label" htmlFor={obj.gearbox}>
                <input
                  onChange={() => onChangeCheckbox(obj.gearbox)}
                  className={`cars__gearbox-checkbox ${ obj.gearbox === engine.find(el => el) ? "cars__gearbox-checkbox--active" : ""}`}
                  checked={obj.checked}
                  id={obj.gearbox}
                  type="checkbox"
                  value={obj.gearbox}
                />
                <span className="cars__gearbox-custom"></span>
                {obj.title}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterEngine;
