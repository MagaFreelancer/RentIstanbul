import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEngine } from "../../redux/slices/filterSlice";

const FilterEngine = () => {
  const engine = useSelector((e) => e.filter.engine);
  const dispatch = useDispatch();

  const onChangeCheckbox = (obj) => {   
    dispatch(
      setEngine(
        engine.map((item) => {
          if (item.gearbox === obj.gearbox) {
            return { ...item, checked: !item.checked };
          } else {
            return item;
          }
        })
      )
    );
  };



  return (
    <div className="cars__engine">
      <h2 className="cars__box">Двигатель</h2>
      <ul>
        {engine.map((obj, index) => {
          console.log(obj);
          return (
            <li key={index} className="cars__gearbox">
              <label className="cars__gearbox-label" htmlFor={obj.gearbox}>
                <input
                  onChange={() => onChangeCheckbox(obj)}
                  className={`cars__gearbox-checkbox ${ obj.checked && "cars__gearbox-checkbox--active"}`}
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
