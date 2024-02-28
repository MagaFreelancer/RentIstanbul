import React from "react";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";

const FilterPrice = () => {
  const dispatch = useDispatch();
  const prices = useSelector((e) => e.filter.price);
  const [localPrice, setLocalPrice] = React.useState(prices);

  const handleChange = (event, newValue) => {
    setLocalPrice(newValue);
    changePrice(newValue)
  };

  const changePrice = React.useCallback(
    debounce((value) => {
      dispatch(setPrice(value));
    }, 500),
    []
  )
 
  const changeValueOne = () => {
    return false;
   
  };
  const changeValueTwo = () => {
    return false;
    
  };
  
  return (
    <div className="cars__price">
      <h2 className="cars__paragraph">Фильтр по цене</h2>
      <div className="cars__inpnumber">
        <input
          className="cars__price-input"
          type="number"
          value={localPrice[0]}
          onChange={() => changeValueOne()}
          disabled
          placeholder="10 ₽"
        />
        <span>-</span>
        <input
          className="cars__price-input"
          type="number"
          value={localPrice[1]}
          onChange={() => changeValueTwo()}
          disabled
          placeholder="1000 ₽"
        />
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        onChange={handleChange}
        value={localPrice}
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
