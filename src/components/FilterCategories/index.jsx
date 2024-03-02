import { setCategoryIds } from "../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
const FilterCategories = () => {
  const list = useSelector((e) => e.filter.categoryIds);
  const dispatch = useDispatch();

  const onClickList = (obj) => {
    dispatch(
      setCategoryIds(
        list.map((item) => {
          if (item.text === obj.text) {
            return { ...item, active: !item.active };
          }
          return item;
        })
      )
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
