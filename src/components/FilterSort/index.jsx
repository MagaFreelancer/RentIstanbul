import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const FilterSort = () => {
  const sortRef = React.useRef();
  const sort = useSelector((e) => e.filter.sort);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const list = [
    { name: "От дешевых к дорогим", sortProperty: "-price" },
    { name: "От дорогих к дешевым", sortProperty: "price" },
    { name: "По дате добавления", sortProperty: "-title" },
  ];

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath ? event.composedPath() : event.path;
      if (!path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onChangeSort = (obj) => {
    dispatch(setSort(obj));
    setOpen(!open);
  };
  return (
    <div className="cars__sort" ref={sortRef}>
      <div className="cars__label" onClick={() => setOpen(!open)}>
        Сортировать по: <span>{sort.name}</span>
      </div>
      <ul className={`cars__popup ${open ? "cars__popup--active" : ""}`}>
        {list.map((obj, index) => (
          <li
            onClick={() => onChangeSort(obj)}
            key={index}
            className={`cars__popup-item ${
              sort.sortProperty == obj.sortProperty
                ? "cars__popup-item--active"
                : ""
            }`}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSort;
