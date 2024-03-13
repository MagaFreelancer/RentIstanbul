import React from "react";
import { useDispatch } from "react-redux";
import {
  setImgs,
  setSliderIndex,
  toggleShowSlider,
} from "../../redux/slices/singleInfoSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderModal = ({ imgs }) => {
  const dispatch = useDispatch();
  const onClickAddParams = (index) => {
    dispatch(setImgs(imgs));
    dispatch(setSliderIndex(index));
    dispatch(toggleShowSlider(true));
  };
  return (
    <div className="modal__slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          type: 'fraction' // Навигация с числовыми индикаторами
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
       
      >
        {imgs.map((item, index) => {
          return (
            <SwiperSlide onClick={() => onClickAddParams(index)} key={index}>
              <img className="slider__img" src={item} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderModal;
