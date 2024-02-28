import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { setCategoryId } from "../../redux/slices/filterSlice";

const FilterCategories = () => {
  const categoryId = useSelector((e) => e.filter.categoryId);
  const dispatch = useDispatch();

  const onClickList = (obj) => {
    dispatch(
      setCategoryId(
        categoryId.map((item) => {
          if (item.value === obj.value) {
            changeAllCategory(obj.value)
            return { ...item, active: !item.active };
          } else {
            return item;
          }
        })
      )
    );
  };

  const changeAllCategory = (value) => {
    console.log(value);
  };

  return (
    <ul className="cars__tabs">
      {categoryId.map((item, index) => (
        <li
          key={index}
          className={`cars__tabs-item ${ item.active && "cars__tabs-item--active"}`}
          onClick={() => onClickList(item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default FilterCategories;
