import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { useTranslation } from "react-i18next";

export const listSort = [
  { name: ["from_expensive", "От дешевых к дорогим"], sortProperty: "-price" },
  { name: ["from_cheap", "От дорогих к дешевым"], sortProperty: "price" }
];
const FilterSort = () => {
  const sortRef = React.useRef();
  const sort = useSelector((e) => e.filter.sort);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

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
        {t("sort_by")}: <span>{t(sort.name[0])}</span>
      </div>
      <ul className={`cars__popup ${open ? "cars__popup--active" : ""}`}>
        {listSort.map((obj, index) => (
          <li
            onClick={() => onChangeSort(obj)}
            key={index}
            className={`cars__popup-item ${
              sort.sortProperty == obj.sortProperty
                ? "cars__popup-item--active"
                : ""
            }`}
          >
            {t(obj.name[0])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSort;
