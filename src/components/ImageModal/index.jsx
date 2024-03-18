import { useDispatch } from "react-redux";
import {
  setImgs,
  setSliderIndex,
  toggleShowSlider,
} from "../../redux/slices/singleInfoSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom, Navigation } from "swiper/modules";

import "./ImageModal.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

const ImageModal = ({ sliderIndex, sliderImgs }) => {
  const dispatch = useDispatch();
  const toggleModal = (e) => {
    if (
      !e.target.classList.contains("slider__img") 
    ) {
      dispatch(toggleShowSlider(false));
      dispatch(setImgs([]));
      dispatch(setSliderIndex(0));
    }
  };
  return (
    <div onClick={(e) => toggleModal(e)} className="image-modal-wrapper">
      <div className="image-modal__close">
        <svg
          viewBox="0 0 256 256"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m137.051 128 75.475-75.475c2.5-2.5 2.5-6.551 0-9.051s-6.551-2.5-9.051 0L128 118.949 52.525 43.475c-2.5-2.5-6.551-2.5-9.051 0s-2.5 6.551 0 9.051L118.949 128l-75.475 75.475a6.399 6.399 0 0 0 4.525 10.926 6.38 6.38 0 0 0 4.525-1.875L128 137.051l75.475 75.475c1.25 1.25 2.888 1.875 4.525 1.875s3.275-.625 4.525-1.875c2.5-2.5 2.5-6.551 0-9.051L137.051 128z"
            fill="#ffffff"
            className="fill-000000"
          ></path>
        </svg>
      </div>
      <div className="image-modal-slider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={40}
          zoom={true}
          navigation={true}
          initialSlide={sliderIndex}
          pagination={{
            clickable: true,
            type: "fraction", // Навигация с числовыми индикаторами
          }}
          modules={[Pagination, Zoom, Navigation]}
          className="mySwiper"
        >
          {sliderImgs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img className="slider__img " src={item} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
