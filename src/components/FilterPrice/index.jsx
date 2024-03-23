import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import { useTranslation } from "react-i18next";
import Slider from "@mui/material/Slider";

const FilterPrice = () => {
  const { t } = useTranslation();
  const value1 = useSelector((e) => e.filter.price);
  const dispatch = useDispatch();
  const [localPrice, setLocalPrice] = React.useState(value1);

  const handleChange = (event, newValue) => {
    setLocalPrice(newValue)
    updatePriceValue(newValue);
  };

  const updatePriceValue = React.useCallback(
    debounce((value) => {
      dispatch(setPrice(value));
    }, 500),
    []
  );
  const changeValueOne = () => {
    return false;
    // if (+value >= value1[1]) {
    //   return false;
    // } else {
    //   dispatch(setPrice([+value, value1[1]]));
    // }
  };
  const changeValueTwo = () => {
    return false;
    // if (+value <= value1[1]) {
    //   return false;
    // } else {
    //   dispatch(setPrice([value1[1], +value]));
    // }
  };
  return (
    <div className="cars__price">
      <h2 className="cars__paragraph">{t("filter_price")}</h2>
      <div className="cars__inpnumber">
        <input
          className="cars__price-input"
          type="number"
          value={localPrice[0]}
          onChange={() => {
            // setValue1([+e.target.value, value1[1]]);
            changeValueOne();
          }}
          placeholder="10 ₽"
        />
        <span>-</span>
        <input
          className="cars__price-input"
          type="number"
          value={localPrice[1]}
          onChange={() => {
            // setValue1([+e.target.value, value1[1]]);
            changeValueTwo();
          }}
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
