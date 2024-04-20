import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import {
  SliderBlocks,
  Heading,
  Advantages,
  FAQ,
  SinglePageModal,
  Reviews,
  ImageModal,
} from "../../components";
import "./Home.scss";

export default function Home() {
  const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector((e) => e.singleInfo);
  const { currencies, statusCur, curren } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();

  const getCurrencies = async () => {
    dispatch(fetchCurrencies());
  };

  React.useEffect(() => {
    getCurrencies();
  }, [curren]);
  
  return (
    <>
      <Heading />
      <SliderBlocks category={0} />
      <SliderBlocks category={1} />
      <SliderBlocks category={2} />

      <Advantages />
      {/* <Reviews /> */}
      <FAQ />
      {showModal && <SinglePageModal />}
      {showSlider && (
        <ImageModal sliderIndex={sliderIndex} sliderImgs={sliderImgs} />
      )}
    </>
  );
}
