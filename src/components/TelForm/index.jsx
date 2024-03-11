import React from "react";
import clearSvg from "../../assets/icons/sm-close.svg";
const TelForm = ({ register, errors }) => {
  const [value, setValue] = React.useState("");

  return (
    <label
      className={`modal__form-label ${
        errors?.tel && " modal__form-label--error"
      }`}
    >
      <span className="modal__form-place">Номер телефона</span>
      <div className="modal__field-wrapp">
        <input
          {...register("tel", {
            required: "Пожалуйста, заполните поля",
            pattern: {
              value: /^\+?[0-9]{10,}$/,
              message: "Заполните поля правильно, пожалуйста",
            },
          })}
          className="modal__form-field"
          type="tel"
          placeholder="Номер телефона"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value !== "" && (
          <img
            onClick={() => setValue("")}
            className="modal__field-close"
            src={clearSvg}
            alt=""
          />
        )}
      </div>
      {errors?.tel && (
        <span className="modal__form-error">{errors?.tel?.message}</span>
      )}
    </label>
  );
};

export default TelForm;
