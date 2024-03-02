import { useDispatch, useSelector } from "react-redux";
import { setBox } from "../../redux/slices/filterSlice";

const FilterBox = () => {
  const gear = useSelector((e) => e.filter.box);
  const dispatch = useDispatch();
  const gearboxs = [
    { gearbox: "any", title: "Любая" },
    { gearbox: "mechanics", title: "Механика" },
    { gearbox: "auto", title: "Автомат" },
  ];

  return (
    <div className="cars__radio">
      <h2 className="cars__box">Коробка передач</h2>
      <ul>
        {gearboxs.map((obj, index) => {
          return (
            <li className="cars__gearbox" key={index}>
              <label className="cars__radio-label" htmlFor={obj.gearbox}>
                <input
                  onChange={() => dispatch(setBox(index))}
                  className={`cars__gearbox-radio ${
                    gear == index ? "cars__gearbox-radio--active" : ""
                  }`}
                  id={obj.gearbox}
                  type="radio"
                  value={obj.gearbox}
                  name="gearbox"
                  checked={gear === index && true}
                />
                <span className="cars__radio-custom"></span>
                {obj.title}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBox;
