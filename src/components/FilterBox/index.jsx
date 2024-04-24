import { useDispatch, useSelector } from "react-redux";
import { setBox } from "../../redux/slices/filterSlice";
import { useTranslation } from "react-i18next";

const FilterBox = () => {
  const { t } = useTranslation();
  const gear = useSelector((e) => e.filter.box);
  const dispatch = useDispatch();
  const gearboxs = [
    { gearbox: 'any', title: "Любая" },
    { gearbox: "mechanical", title: "Механика" },
    { gearbox: "automatic", title: "Автомат" },
  ];

  return (
    <div className="cars__radio">
      <h2 className="cars__box">{t("transmission")}</h2>
      <ul>
        {gearboxs.map((obj, index) => {
          return (
            <li className="cars__gearbox" key={index}>
              <label className="cars__radio-label" htmlFor={obj.gearbox}>
                <input
                  onChange={() => dispatch(setBox(obj.gearbox))}
                  className={`cars__gearbox-radio ${
                    gear == obj.gearbox ? "cars__gearbox-radio--active" : ""
                  }`}
                  id={obj.gearbox}
                  type="radio"
                  value={obj.gearbox}
                  name="gearbox"
                  checked={gear === obj.gearbox && true}
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
