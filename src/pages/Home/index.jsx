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

export const OpenContext = React.createContext();

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <OpenContext.Provider value={() => setOpen(!open)}>
        <Heading />
        <SliderBlocks title={"Люкс"} />
        <SliderBlocks title={"Средний класс"} />
        <SliderBlocks title={"Компактные"} />

        <Advantages />
        <Reviews />
        <FAQ />
        {open && <SinglePageModal />}
      </OpenContext.Provider>
    </>
  );
}
