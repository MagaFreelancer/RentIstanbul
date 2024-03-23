import { useDispatch, useSelector } from "react-redux";
import { setEngine } from "../../redux/slices/filterSlice";
import { useTranslation } from "react-i18next";

const FilterEngine = () => {
  const { t } = useTranslation();
  const engine = useSelector((e) => e.filter.engine);
  const dispatch = useDispatch();

  console.log(engine);

  const onChangeCheckbox = (obj) => {
    dispatch(
      setEngine(
        engine.map((item) => {
          if (item.sortProperty === obj.sortProperty) {
            return { ...item, checked: !item.checked };
          } else {
            return item;
          }
        })
      )
    );
  };

  return (
    <div className="cars__engine">
      <h2 className="cars__box">{t("engine")}</h2>
      <ul>
        {engine.map((obj, index) => {
          return (
            <li key={index} className="cars__gearbox">
              <label className="cars__gearbox-label" htmlFor={obj.sortProperty}>
                <input
                  onChange={() => onChangeCheckbox(obj)}
                  className={`cars__gearbox-checkbox ${
                    obj.gearbox === engine[0].sortProperty
                      ? "cars__gearbox-checkbox--active"
                      : ""
                  }`}
                  checked={obj.checked}
                  id={obj.sortProperty}
                  type="checkbox"
                  value={obj.sortProperty}
                />
                <span className="cars__gearbox-custom"></span>
                {t(obj.sortProperty)}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterEngine;
