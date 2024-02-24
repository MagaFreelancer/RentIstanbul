import { SliderBlocks, Heading, Advantages, FAQ } from "../../components";
import Reviews from "../../components/Reviews";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Heading />
      <SliderBlocks title={"Люкс"} />
      {/* <SliderBlocks title={"Средний класс"} />
      <SliderBlocks title={"Компактные"} /> */}
      <Advantages />
      <Reviews/>
      <FAQ />
    </>
  );
}
