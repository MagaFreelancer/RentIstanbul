import { useDispatch } from "react-redux";
import {
  setImgs,
  setSliderIndex,
  toggleShowSlider,
} from "../../redux/slices/singleInfoSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation } from "swiper/modules";

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
    if (e.target.classList.contains("image-modal-wrapper")) {
      dispatch(toggleShowSlider(false));
      dispatch(setImgs([]));
      dispatch(setSliderIndex(0));
    }
  };
  return (
    <div onClick={(e) => toggleModal(e)} className="image-modal-wrapper">
      <div className="image-modal-slider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={-90}
          zoom={true}
          navigation={true}
          initialSlide={sliderIndex}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation]}
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
