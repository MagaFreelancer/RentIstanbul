import React from "react";
import Select from "react-select";
import { Calendar } from "../../components";
const socials = ["Whatsapp", "Telegram"];
const options = [
  { value: 100, showAdress: true, label: "Доставка по городу + 100€" },
  { value: 0, showAdress: false, label: "Взять в из офиса" },
];

const ModalForm = ({ setPlace }) => {
  const [showAdress, setShowAdress] = React.useState(false);

  const handleChange = (obj) => {
    //при изменении select получение
    setPlace(obj.value);
    setShowAdress(obj.showAdress);
  };
  const [activeSocials, setActiveSocials] = React.useState(0);

  return (
    <form className="modal__form">
      <h5 className="modal__form-title">Получение</h5>
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
            padding:4
          }),
        }}
        options={options}
        onChange={(e) => handleChange(e)}
      />
      {showAdress && (
        <input
          className="modal__form-field"
          type="text"
          placeholder="Адрес доставки"
        />
      )}
      <Calendar />
      <h5 className="modal__form-title">Данные основного водителя</h5>
      <label className="modal__form-label">
        <span >Имя и фамилия</span>
        <input
          className="modal__form-field"
          type="text"
          placeholder="Имя и фамилия"
        />
      </label>
      <label className="modal__form-label">
        <span >Дата рождения</span>
        <input
          className="modal__form-field"
          type="date"
          placeholder="Дата рождения"
        />
      </label>
      <label className="modal__form-label">
        <span > Почта</span>
        <input className="modal__form-field" type="email" placeholder="Почта" />
      </label>
      <label className="modal__form-label">
        <span >Номер телефона</span>
        <input
          className="modal__form-field"
          type="tel"
          placeholder="Номер телефона"
        />
      </label>
      <h5 className="modal__form-title">Куда вам написать?</h5>

      <div className="modal__form-radios">
        {socials.map((item, index) => {
          return (
            <label key={index} className="modal__radio-label">
              <input
                onChange={() => setActiveSocials(index)}
                className={`modal__gearbox-radio ${
                  activeSocials == index ? "modal__gearbox-radio--active" : ""
                }`}
                type="radio"
                value={item}
                name="gearbox"
              />
              <span className="modal__radio-custom"></span>
              {item}
            </label>
          );
        })}
      </div>
      <textarea className="modal__form-textarea" placeholder="Комментарий" />
    </form>
  );
};

export default ModalForm;
