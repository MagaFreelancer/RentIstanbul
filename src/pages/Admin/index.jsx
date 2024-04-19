import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarBlock, CarSkeleton, FilterBox, FilterCategories, FilterEngine, FilterPrice, FilterSort, FilterYears, ImageModal, Search, SinglePageModal } from "../../components";
import closeIcon from "../../assets/icons/close.svg";
import { fetchCurrencies } from "../../redux/slices/currenciesSlice";
import AdminModal from "./AdminModal";
import { getFilterCar } from "../../redux/requests/getFilterCar";


const Admin = () => {
    const dispatch = useDispatch();
    const { showModal, showSlider, sliderIndex, sliderImgs } = useSelector((e) => e.singleInfo);
    const [filterOpen, setFilterOpen] = React.useState(false);
    const { currencies, statusCur } = useSelector((state) => state.currencies);
    const { sortProperty } = useSelector((e) => e.filter.sort);
    const { items, status } = useSelector((state) => state.filterCars);

    const getCars = async () => {
        dispatch(getFilterCar(sortProperty))
        dispatch(fetchCurrencies());
    };

    React.useEffect(() => {
        getCars();
    }, [sortProperty]);

    const cars = items.map((obj) => (
        <CarBlock key={obj.id} obj={obj} currencies={currencies} />
    ));

    const skeletons = [...new Array(9)].map((_, index) => (
        <CarSkeleton key={index} />
    ));

    return (
        <>
            <section className="cars">
                <div className="container cars__container">
                    <aside
                        className={`cars__filter ${
                            filterOpen ? "cars__filter--active" : ""
                        }`}
                    >
                        <FilterPrice />
                        <FilterYears />
                        <FilterBox />
                        <FilterEngine />
                        <button
                            onClick={() => setFilterOpen(false)}
                            className={`cars__burger ${
                                filterOpen ? `cars__burger--active` : ""
                            }`}
                        >
                            <img
                                className="cars__burger-icon"
                                src={closeIcon}
                                alt=""
                            />
                        </button>
                    </aside>
                    <button
                        onClick={() => setFilterOpen(!filterOpen)}
                        className="cars__button-filter"
                    >
                        Filter
                    </button>

                    <main className="cars__main">
                        <div className="cars__top">
                            <div className="cars__heading">
                                <h1 className="cars__name">
                                    Машины
                                </h1>
                                <FilterSort />
                            </div>
                            <Search />

                            <FilterCategories />
                        </div>
                        <div>
                            <ul className="cars__content">
                                {status === "success" && statusCur === "success"
                                    ? cars
                                    : skeletons}
                            </ul>
                        </div>
                    </main>
                </div>
            </section>
            {showModal && <AdminModal />}
            {showSlider && (
              <ImageModal sliderIndex={sliderIndex} sliderImgs={sliderImgs} />
            )}
        </>
    );
};

export default Admin;
