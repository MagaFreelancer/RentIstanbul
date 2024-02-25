import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGearbox } from "../../redux/slices/filterSlice";

const FilterBox = () => {
  const dispatch = useDispatch();
  const gearbox = useSelector((e) => e.filter.gearboxs);

  const gearboxs = [
    { gearbox: "any", title: "Любая" },
    { gearbox: "mechanics", title: "Механика" },
    { gearbox: "auto", title: "Автомат" },
  ];

  return (
    <div className="cars__radio">
      <h2 className="cars__box">Коробка передач</h2>
      <ul>
        {gearboxs.map((obj, index) => {
          return (
            <li
              className="cars__gearbox"
              key={index}
            >
              <label className="cars__radio-label" htmlFor={obj.gearbox}>
                <input
                  onClick={() => dispatch(setGearbox(obj.gearbox))}
                  className={`cars__gearbox-radio ${ obj.gearbox === gearbox ? "cars__gearbox-radio--active" : ""}`}
                  id={obj.gearbox}
                  type="radio"
                  value={obj.gearbox}
                  name="gearbox"
                />
                <span className="cars__radio-custom"></span>
                {obj.title}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBox;
