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
} from "../../components";
import "./Home.scss";

export default function Home() {
  const { showModal } = useSelector((e) => e.singleInfo);
  const { currencies, statusCur, curren } = useSelector(
    (state) => state.currencies
  );
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
      <SliderBlocks title={"Люкс"} />
      <Advantages />
      <Reviews />
      <FAQ />
      {showModal && <SinglePageModal />}
    </>
  );
}
