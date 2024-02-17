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
                <div className="cars__inner-block">
                    <div className="cars__filter">
                        
                        <div className="cras__price">
                            
                        </div>

                        <div className="cars__years">
                            <p className="cars__years-title">Год выпуска</p>

                            <select className="cars__select">
                                <option value="" defaultChecked>1970+</option>
                                <option value="">test</option>
                                <option value="">test</option>
                                <option value="">test</option>
                            </select>
                        </div>

                        <ul className="cars__radio" action="">
                            <p className="cars__corobka">Коробка передач</p>
                            <li className="cars__gearbox">
                                <input id="any" type="radio" defaultValue="any" name="gearbox" defaultChecked />
                                <label htmlFor="any">Любая</label>
                            </li>
                            <li className="cars__gearbox">
                                <input id="mechanics" type="radio" defaultValue="mechanics" name="gearbox" />
                                <label htmlFor="mechanics">Механика</label>
                            </li>
                            <li className="cars__gearbox">
                                <input id="auto" type="radio" defaultValue="auto" name="gearbox" />
                                <label htmlFor="auto">Автомат</label>
                            </li>
                        </ul>

                        <ul className="cars__engine" action="">
                            <p className="cars__corobka">Двигатель</p>
                            <li className="cars__gearbox">
                                <input id="petrol" type="checkbox" defaultValue="petrol" name="gearbox" defaultChecked />
                                <label htmlFor="petrol">Бензин</label>
                            </li>
                            <li className="cars__gearbox">
                                <input id="diesel" type="checkbox" defaultValue="diesel" name="gearbox" />
                                <label htmlFor="diesel">Дизель</label>
                            </li>
                            <li className="cars__gearbox">
                                <input id="electro" type="checkbox" defaultValue="electro" name="gearbox" />
                                <label htmlFor="electro">Электо/Гибрид</label>
                            </li>
                        </ul>
                    </div>
                    <div className="cars__block">
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
                </div>
            </div>
        </section>
    );
}
 
export default Cars;