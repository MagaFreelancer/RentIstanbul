import React from "react";

const FilterCategories = () => {
  const [list, setList] = React.useState([
    { text: "Все", value: "all", active: false, category: 0 },
    { text: "Компактные", value: "compact", active: false, category: 1 },
    { text: "Средний класс", value: "middle", active: false, category: 2 },
    { text: "Кроссоверы", value: "crossovers", active: false, category: 3 },
    { text: "Люкс", value: "lux", active: false, category: 4 },
  ]);

  const onClickList = (obj) => {
    setList(
      list.map((item) => {
        if (item.text === obj.text) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };
  return (
    <ul className="cars__tabs">
      {list.map((item, index) => (
        <li
          key={index}
          className={`cars__tabs-item ${
            item.active && "cars__tabs-item--active"
          }`}
          onClick={() => onClickList(item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default FilterCategories;
