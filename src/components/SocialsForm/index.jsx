import React from "react";
const SocialsForm = ({ register }) => {
  const socials = ["Whatsapp", "Telegram"];

  const [activeSocials, setActiveSocials] = React.useState(0);

  return (
    <div className="modal__form-radios">
      {socials.map((item, index) => {
        return (
          <label key={item} htmlFor={item} className="modal__radio-label">
            <input
              className={`modal__gearbox-radio ${
                activeSocials == index ? "modal__gearbox-radio--active" : ""
              }`}
              onClick={() => setActiveSocials(index)}
              type="radio"
              value={item}
              name="gearbox"
              id={item}
              checked={index === activeSocials && true}
              {...register("social")}
            />
            <span className="modal__radio-custom"></span>
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default SocialsForm;
