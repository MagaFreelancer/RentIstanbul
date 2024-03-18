import React from "react";
import clearSvg from "../../assets/icons/sm-close.svg";
import Select from "react-select";
import { Controller } from "react-hook-form";
const options = [
  { value: 100, showAdress: true, label: "Доставка по городу + 100€" },
  { value: 0, showAdress: false, label: "Взять в из офиса" },
];
const SelectForm = ({ setValue, setPlace, register, errors }) => {
  const [value, setValueAddress] = React.useState("");

  const [showAdress, setShowAdress] = React.useState(false);

  const handleChange = (obj) => {
    //при изменении select получение
    setPlace(obj.value);
    setShowAdress(obj.showAdress);
    setValue("place", obj.label);
  };
  return (
    <>
      <Select
        className="react-select-container modal__form-select"
        classNamePrefix="react-select"
        placeholder="Доставка"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "" : "#e7e8ea",
            fontSize: 16,
            fontWeight: 400,
            padding: 4,
          }),
        }}
        options={options}
        onChange={(e) => handleChange(e)}
      />
      <label
        className={`modal__form-label ${
          errors?.address && " modal__form-label--error"
        }`}
      >
        {showAdress && (
          <div className="modal__field-wrapp">
            <div className="modal__field-wrapp--mod">
              <input
                {...register("address", {
                  required: "Пожалуйста, заполните поля",
                  minLength: {
                    value: 8,
                    message: "Минимум 8 символов.",
                  },
                })}
                className="modal__form-field"
                type="text"
                placeholder="Адрес доставки"
                value={value}
                onChange={(e) => setValueAddress(e.target.value)}
              />
              {value !== "" && (
                <img
                  onClick={() => {
                    setValueAddress("");
                  }}
                  className="modal__field-close"
                  src={clearSvg}
                  alt=""
                />
              )}
            </div>
            {errors?.address && (
              <span className="modal__form-error">
                {errors?.address.message}
              </span>
            )}
          </div>
        )}
      </label>
    </>
  );
};

export default SelectForm;
