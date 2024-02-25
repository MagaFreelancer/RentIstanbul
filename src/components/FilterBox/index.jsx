import React from "react";

const FilterBox = () => {
  const [gearadios, setGeaRadios] = React.useState({
    gearbox: "any",
    title: "Любая",
  });

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
              onClick={() => setGeaRadios(obj)}
              className="cars__gearbox"
              key={index}
            >
              <label className="cars__radio-label" htmlFor={obj.gearbox}>
                <input
                  className={`cars__gearbox-radio ${
                    gearadios.gearbox === obj.gearbox
                      ? "cars__gearbox-radio--active"
                      : ""
                  }`}
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
