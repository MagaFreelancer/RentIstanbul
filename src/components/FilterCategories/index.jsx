import React from "react";
import { useDispatch, useSelector } from "react-redux"; 

const FilterCategories = () => {
  const categoryId = useSelector((e) => e.filter.categoryId);
  const dispatch = useDispatch();
 
  const list = [
    { text: "Все", value: "all", active: false, category: 0 },
    { text: "Компактные", value: "compact", active: false, category: 1 },
    { text: "Средний класс", value: "middle", active: false, category: 2 },
    { text: "Кроссоверы", value: "crossovers", active: false, category: 3 },
    { text: "Люкс", value: "lux", active: false, category: 4 },
  ];

  const onClickList = (obj) => {
    
  };

  return (
    <ul className="cars__tabs">
      {list.map((item, index) => (
        <li
          key={index}
          className={`cars__tabs-item ${ categoryId[index] === item.category ? "cars__tabs-item--active" : ''}`}
          onClick={() => onClickList(item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default FilterCategories;
