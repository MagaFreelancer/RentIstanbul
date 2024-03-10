const EmailForm = ({ register, errors }) => {
  return (
    <label
      className={`modal__form-label ${
        errors?.email && " modal__form-label--error"
      }`}
    >
      <span className="modal__form-place"> Почта</span>
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
      />
      {errors?.email && (
        <span className="modal__form-error">{errors?.email?.message}</span>
      )}
    </label>
  );
};

export default EmailForm;
