import React from "react";
import { useTranslation } from "react-i18next";

import {
  Calendar,
  SelectForm,
  FullNameForm,
  DateForm,
  EmailForm,
  TelForm,
  SocialsForm,
} from "../../components";

const ModalForm = ({
  setPlace,
  register,
  modalFormRef,
  handleSubmit,
  setValue,
  errors,
}) => {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      ref={modalFormRef}
      id="modal-form"
      className="modal__form"
    >
      <h5 className="modal__form-title">{t("form_receiving")}</h5>
      <div className="modal__form-col">
        <SelectForm
          register={register}
          setValue={setValue}
          setPlace={setPlace}
          errors={errors} 
        />
      </div>
      <Calendar />
      <h5 className="modal__form-title">{t("main_driver")}</h5>
      <FullNameForm errors={errors} register={register}  />
      <DateForm errors={errors} register={register}  />
      <EmailForm errors={errors} register={register}  />
      <TelForm errors={errors} register={register}  />

      <h5 className="modal__form-title">{t("where_write")}</h5>
      <SocialsForm register={register} />
      <textarea
        {...register("comment")}
        className="modal__form-textarea"
        placeholder="Комментарий"
      />
    </form>
  );
};

export default ModalForm;
