import React from "react";
import clearSvg from "../../assets/icons/sm-close.svg";
const EmailForm = ({ register, errors }) => {
  const [value, setValue] = React.useState("");
  return (
    <label
      className={`modal__form-label ${
        errors?.email && " modal__form-label--error"
      }`}
    >
      <span className="modal__form-place"> Почта</span>
      <div className="modal__field-wrapp">
        <input
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Заполните поля правильно, пожалуйста",
            },
          })}
          className="modal__form-field"
          type="email"
          placeholder="Почта"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
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
      {errors?.email && (
        <span className="modal__form-error">{errors?.email?.message}</span>
      )}
    </label>
  );
};

export default EmailForm;
