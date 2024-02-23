import React from "react";
import Slider from "@mui/material/Slider";

const FilterPrice = () => {
  const [value1, setValue1] = React.useState([350, 650]);

  const handleChange = (event, newValue) => {
    setValue1([...newValue]);
  };
  const changeValueOne = (value) => {
    if (+value >= value1[1]) {
      return false;
    } else {
      setValue1([+value, value1[1]]);
    }
  };
  const changeValueTwo = (value) => {
    if (+value <= value1[1]) {
      return false;
    } else {
      setValue1([value1[1], +value]);
    }
  };
  return (
    <div className="cars__price">
      <h2 className="cars__paragraph">Фильтр по цене</h2>
      <div className="cars__inpnumber">
        <input
          className="cars__price-input"
          type="number"
          value={value1[0]}
          onChange={({ target }) => {
            // setValue1([+e.target.value, value1[1]]);
            changeValueOne(target.value);
          }}
          placeholder="10 ₽"
        />
        <span>-</span>
        <input
          className="cars__price-input"
          type="number"
          value={value1[1]}
          onChange={({ target }) => {
            // setValue1([+e.target.value, value1[1]]);
            changeValueTwo(target.value);
          }}
          placeholder="1000 ₽"
        />
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        onChange={handleChange}
        value={value1}
        min={10}
        max={1000}
        disableSwap
        sx={{
          color: "#49D0FF",
        }}
      />
    </div>
  );
};

export default FilterPrice;
