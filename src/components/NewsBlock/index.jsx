import { Link } from "react-router-dom";
import "./NewsBlock.scss";
const NewsBlock = ({ imageUrl, title, text, date, id }) => {
  return (
    <Link to={`/news/${id}`} className="news-block">
      <div className="news-block__info">
        <div className="news-block__img">
          <img src={imageUrl} alt="" />
        </div>
        <h3 className="news-block__title">{`${title.slice(0, 45)}...`}</h3>
        <p className="news-block__text">{`${text.slice(0, 110)}...`}</p>
      </div>
      <div className="news-block__footer">
        <span className="news-block__more">Узнать подробнее</span>
        <span className="news-block__date">{date}</span>
      </div>
    </Link>
  );
};

export default NewsBlock;
