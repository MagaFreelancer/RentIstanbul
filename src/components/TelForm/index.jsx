const TelForm = ({ register, errors }) => {
    return (
        <label
        className={`modal__form-label ${
          errors?.tel && " modal__form-label--error"
        }`}
      >
        <span className="modal__form-place">Номер телефона</span>
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
        />
        {errors?.tel && (
          <span className="modal__form-error">{errors?.tel?.message}</span>
        )}
      </label>
    );
  };
  
  export default TelForm;
  