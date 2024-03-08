import React from "react";
import {
  SliderBlocks,
  Heading,
  Advantages,
  FAQ,
  SinglePageModal,
} from "../../components";
import Reviews from "../../components/Reviews";
import "./Home.scss";
import { useSelector } from "react-redux";

export default function Home() {
  const { showModal } = useSelector((e) => e.singleInfo);
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
