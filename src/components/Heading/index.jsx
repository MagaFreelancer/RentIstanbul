import { Link } from "react-router-dom";
import "./Heading.scss";
const Heading = () => {
  return (
    <section className="heading">
      <div className="heading__container container">
        <div className="heading__col">
          <h1 className="heading__title">Аренда автомобилей в Турции</h1>
          <h4 className="heading__subtitle">
            Найти машину по душе для следующего путешествия
          </h4>
        </div>
        <div className="heading__col">
          <Link to="./reviews" className="heading__review">
            Отзывы
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Heading;
