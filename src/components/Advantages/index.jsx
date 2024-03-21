import { useTranslation } from "react-i18next";
import "./Advantages.scss";
const Advantages = () => {
  const { t } = useTranslation();

  return (
    <section className="advantages">
      <div className="container advatages__container">
        <h2 className="advantages__title title">{t("advantage")}</h2>
        <div className="advantages__content">
          <div className="advantages__col">
            <h3 className="advantages__heading">{t("advantage_fine_print")}</h3>
            <div className="advantages__descr">
              {t("advantage_conditions")}
            </div>
          </div>
          <div className="advantages__col">
            <h3 className="advantages__heading">{t("advantage_deposits")}</h3>
            <div className="advantages__descr">
              {t("advantage_deposit")}
            </div>
          </div>
          <div className="advantages__col">
            <h3 className="advantages__heading">{t("advantage_damage")}</h3>
            <div className="advantages__descr">
              {t("advantage_damage_cheaper")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
