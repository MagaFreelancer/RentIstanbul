import React from "react";
import Select from "react-select";
const options = [
  { value: 100, showAdress: true, label: "Доставка по городу + 100€" },
  { value: 0, showAdress: false, label: "Взять в из офиса" },
];
const SelectForm = ({ setValue, setPlace, register }) => {
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
      {showAdress && (
        <input
          {...register("adress")}
          className="modal__form-field"
          type="text"
          placeholder="Адрес доставки"
        />
      )}
    </>
  );
};

export default SelectForm;
