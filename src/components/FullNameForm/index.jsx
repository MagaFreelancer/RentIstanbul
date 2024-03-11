import React from "react";
import clearSvg from "../../assets/icons/sm-close.svg";

const FullNameForm = ({ register, errors }) => {
  const [value, setValue] = React.useState("");
  return (
    <label
      className={`modal__form-label ${
        errors?.fullName && "modal__form-label--error"
      }`}
    >
      <span className="modal__form-place">Имя и фамилия</span>

      <div className="modal__field-wrapp">
        <input
          {...register("fullName", {
            required: "Пожалуйста, заполните поля",
            minLength: {
              value: 8,
              message: "Минимум 8 символов.",
            },
          })}
          className="modal__form-field"
          type="text"
          placeholder="Имя и фамилия"
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
      {errors?.fullName && (
        <span className="modal__form-error">{errors?.fullName?.message}</span>
      )}
    </label>
  );
};

export default FullNameForm;
