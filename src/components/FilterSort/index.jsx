import { useEffect, useRef, useState } from "react";

const FilterSort = () => {
    const sortRef = useRef();
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState({
        name: "От дешевых к дорогим",
        sortProperty: "-price",
    });

    const list = [
      { name: "От дешевых к дорогим", sortProperty: "-price" },
      { name: "От дорогих к дешевым", sortProperty: "price" },
      { name: "По дате добавления", sortProperty: "-title" },
    ];

    useEffect(() => {
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
        setSort(obj);
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
                  className={`cars__popup-item ${sort.sortProperty == obj.sortProperty ? "cars__popup-item--active" : ""}`}>
                  {obj.name}
                </li>
              ))}
            </ul>
        </div>
    );
}
 
export default FilterSort;