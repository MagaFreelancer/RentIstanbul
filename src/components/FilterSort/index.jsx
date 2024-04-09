import React from "react";

const FilterSort = ({ sortActiveObj, listSort, onChangeSort }) => {
  const sortRef = React.useRef();
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

  return (
    <div className="cars__sort" ref={sortRef}>
      <div className="cars__label" onClick={() => setOpen(!open)}>
        {/* {t("sort_by")}: <span>{t(sort.name[0])}</span> */}
        Сортировать по: <span>{sortActiveObj.name}</span>
      </div>
      <ul className={`cars__popup ${open ? "cars__popup--active" : ""}`}>
        {listSort.map((obj, index) => (
          <li
            onClick={() => {
              onChangeSort(obj);
              setOpen(!open);
            }}
            key={index}
            className={`cars__popup-item ${
              sortActiveObj.sortProperty == obj.sortProperty
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
