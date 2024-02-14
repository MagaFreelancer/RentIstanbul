import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cars.scss";
import { fetchCars } from "../../../redux/slices/carSlice";
import CarBlock from "../../../components/CarBlock";
import CarSkeleton from "../../../components/CarSkeleton/CarSkeleton"

const Cars = () => {
    const { items, status } = useSelector((state) => state.car);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        dispatch(fetchCars());
    };

    const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
    const skeletons = [...new Array(11)].map((_, index) => (
      <CarSkeleton key={index} />
    ));

    return (
        <section className="cars">
            <div className="container">
                <div className="cars__inner">
                    <h1 className="cars__name">Машины</h1>
                    
                    <button>Сортровка по Машин</button>
                </div>
                <ul className="cars__list">
                    {status === 'success' ? cars : skeletons}
                </ul>
            </div>
        </section>
    );
}
 
export default Cars;