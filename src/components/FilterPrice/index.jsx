import React from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/slices/filterSlice";

const FilterPrice = () => {
  const dispatch = useDispatch();
  const prices = useSelector((e) => e.filter.price);

  const handleChange = (event, newValue) => {
    dispatch(setPrice([...newValue]));
  };
  
  return (
    <div className="cars__price">
      <h2 className="cars__paragraph">Фильтр по цене</h2>
      <div className="cars__inpnumber">
        <input
          className="cars__price-input"
          type="number"
          value={prices[0]}
          disabled
          placeholder="10 ₽"
        />
        <span>-</span>
        <input
          className="cars__price-input"
          type="number"
          value={prices[1]}
          disabled
          placeholder="1000 ₽"
        />
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        onChange={handleChange}
        value={prices}
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
