import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../redux/slices/newsSlice";
import { NewsBlock, CarSkeleton } from "../../components";
import "./News.scss";
const News = () => {
  const { items, status } = useSelector((state) => state.news);

  const dispatch = useDispatch();
  async function getNews() {
    dispatch(fetchNews());
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getNews();
  }, []);
  const news = items.map((obj, index) => <NewsBlock key={index} {...obj} />);
  const skeletons = [...new Array(3)].map((_, index) => (
    <CarSkeleton key={index} />
  ));
  return (
    <section className="news">
      <div className="container news__container">
        <h2 className="news__title title">Новости</h2>
        <div className="news__content">
          {status === "success" ? news : skeletons}
        </div>
      </div>
    </section>
  );
};

export default News;
