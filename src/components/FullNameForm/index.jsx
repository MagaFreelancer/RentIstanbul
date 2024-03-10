import React from "react";

const FullNameForm = ({ register,errors }) => {
  return (
    <label
      className={`modal__form-label ${
        errors?.fullName && " modal__form-label--error"
      }`}
    >
      <span className="modal__form-place">Имя и фамилия</span>

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
      />
      {errors?.fullName && (
        <span className="modal__form-error">{errors?.fullName.message}</span>
      )}
    </label>
  );
};

export default FullNameForm;
