import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.scss";

const Reviews = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const reviews = [
        {
            avatar: '', 
            name: 'Alsern Aldern', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dicta suscipit fuga mollitia Lorem ipsum dolor sit amet, consectetur adipisicing'
        },
        {
            avatar: '', 
            name: 'Alsern Aldern', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dicta suscipit fuga mollitia Lorem ipsum dolor sit amet, consectetur adipisicing'
        },
        {
            avatar: '', 
            name: 'Alsern Aldern', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dicta suscipit fuga mollitia Lorem ipsum dolor sit amet, consectetur adipisicing'
        },
        
    ]

    return (
        <section className="reviews">
            <div className="container">
                <h2 className="reviews__title">Отзывы</h2>
                <ul>
                    <Slider {...settings}>
                        {reviews.map((review, index) => {
                            return (
                                <li key={index} className="reviews__list-item">
                                    <div className="reviews__list-profil">
                                        <svg className="reviews__list-avatar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <h3 className="reviews__list-name">{review.name}</h3>
                                    </div>
                                    <p className="reviews__list-comment">{review.title}</p>
                                </li>
                            )
                        })}
                    </Slider>
                </ul>
            </div>
        </section>
    );
}
 
export default Reviews;