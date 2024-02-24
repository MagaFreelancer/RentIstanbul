import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { CarSkeleton, CarBlock } from "../../components";
import Slider from "react-slick";
import "./SliderBlocks.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderBlocks({ title }) {
    const { items, status } = useSelector((state) => state.car);
    const dispatch = useDispatch();

    let settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };

    React.useEffect(() => {
      getCars();
    }, []);

    async function getCars() {
        dispatch(fetchCars());
        window.scrollTo(0, 0);
    }
    const pizzas = items.slice(0, 4).map((obj, index) => <CarBlock key={index} {...obj} />);
    const skeletons = [...new Array(4)].map((_, index) => (
        <CarSkeleton key={index} />
    ));
    return (
        <section className="slider-block">
            <div className="container slider-block__container">
                
                    <h2 className="slider-block__title title">{title}</h2>
                    <div>
                        <Slider {...settings}>
                            {status === "success" ? pizzas : skeletons}
                        </Slider>
                    </div>
                
                
            </div>
        </section>
    );
}
