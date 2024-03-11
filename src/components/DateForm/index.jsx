const DateForm = ({ register, errors }) => {
  const isFutureDate = (value) => {

    console.log(value);
    const inputDate = new Date(value);
    const currentDate = new Date();

    return inputDate <= currentDate;
  };
  return (
    <label
      className={`modal__form-label ${
        errors?.date && " modal__form-label--error"
      }`}
    >
      <span className="modal__form-place">Дата рождения</span>
      <input
        {...register("date", {
          required: "Пожалуйста, заполните поля",

          validate: isFutureDate,
        })}
        className="modal__form-field"
        type="date"
      />

      {errors?.date && errors?.date?.type === "validate" && (
        <span className="modal__form-error">
          Введите дату правильно, пожалуйста
        </span>
      )}
      {errors?.date && (
        <span className="modal__form-error">{errors?.date?.message}</span>
      )}
    </label>
  );
};

export default DateForm;
