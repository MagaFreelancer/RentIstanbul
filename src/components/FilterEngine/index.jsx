import React from "react";

const FilterEngine = () => {
  const [checkBox, setCheckBox] = React.useState([
    { gearbox: "petrol", title: "Бензин", checked: false },
    { gearbox: "diesel", title: "Дизель", checked: false },
    { gearbox: "electro", title: "Электо/Гибрид", checked: false },
  ]);

  const onChangeCheckbox = (obj) => {
    setCheckBox(
      checkBox.map((item) => {
        if (item.gearbox === obj.gearbox) {
          item.checked = !obj.checked;
        }
        return item;
      })
    );
  };

  return (
    <div className="cars__engine">
      <h2 className="cars__box">Двигатель</h2>
      <ul>
        {checkBox.map((obj, index) => {
          return (
            <li key={index} className="cars__gearbox">
              <label className="cars__gearbox-label" htmlFor={obj.gearbox}>
                <input
                  onChange={() => onChangeCheckbox(obj)}
                  className={`cars__gearbox-checkbox ${
                    obj.gearbox === checkBox[0].gearbox
                      ? "cars__gearbox-checkbox--active"
                      : ""
                  }`}
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
