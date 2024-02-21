import { Slider } from "@mui/material";
import React from "react";

const FilterPrice = () => {
    const minDistance = 10;

    const [value1, setValue1] = React.useState([350, 650]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <div className="cars__price">
            <h2 className="cars__paragraph">Фильтр по цене</h2>
            <div className="cars__inpnumber">
              <input className="cars__price-input" type="number" value={value1[0]} placeholder="10 ₽"/>
              <span>-</span>
              <input className="cars__price-input" type="number" value={value1[1]} placeholder="1000 ₽"/>
            </div>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              min={10}
              max={1000}
              disableSwap
            />
        </div>
    );
}
 
export default FilterPrice;