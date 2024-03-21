import { useTranslation } from "react-i18next";
import "./Heading.scss";


const Heading = () => {
  const { t } = useTranslation();

  return (
    <section className="heading">
      <div className="heading__container container">
        <div className="heading__col">
          <h1 className="heading__title">{t("car_rental")}</h1>
          <h4 className="heading__subtitle">
            {t("find_car")}
          </h4>
        </div>
      </div>
    </section>
  );
};
export default Heading;
