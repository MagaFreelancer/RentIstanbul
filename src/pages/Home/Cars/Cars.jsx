import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cars.scss";
import { fetchCars } from "../../../redux/slices/carSlice";
import CarBlock from "../../../components/CarBlock";
import CarSkeleton from "../../../components/CarSkeleton/CarSkeleton"

const Cars = () => {
    const { items, status } = useSelector((state) => state.car);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    React.useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        dispatch(fetchCars());
    };

    const cars = items.map((obj, index) => <CarBlock key={index} {...obj} />);
    const skeletons = [...new Array(10)].map((_, index) => (
      <CarSkeleton key={index} />
    ));

    return (
        <section className="cars">
            <div className="container">
                <div className="cars__inner">
                    <h1 className="cars__name">Машины</h1>
                    <div className="cars__table">           
                        <button onClick={() => setOpen(!open)}>Сортировать по <span>От дорогих к дешевым</span></button>
            
                        <ul className={`cars__list-item${open ? '--active' : ''}`}>
                            <li className="cars__item">От дешевых к дорогим</li>
                            <li className="cars__item active">От дорогих к дешевым</li>
                            <li className="cars__item">по дате</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="cars__list">
                        {status === 'success' ? cars : skeletons}
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
 
export default Cars;