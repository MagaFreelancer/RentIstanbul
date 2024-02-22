import { SliderBlocks, Heading } from "../../components";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <Heading />
      <SliderBlocks title={"Люкс"} />
      <SliderBlocks title={"Средний класс"} />
      <SliderBlocks title={"Компактные"} />
    </>
  );
}
