import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSingleCar,
    toggleShowModal,
} from "../../../redux/slices/singleInfoSlice";
import { useForm } from "react-hook-form";

const AdminModal = () => {
    const dispatch = useDispatch();
    const { days, item, id, status } = useSelector((e) => e.singleInfo);
    const onSubmit = (data) => console.log(data);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const getSingleCar = async () => {
        dispatch(fetchSingleCar(id));
    };

    React.useEffect(() => {
        getSingleCar();
    }, []);

    const toggleModal = (e) => {
        if (
            e.target.classList.contains("modal-wrapper") ||
            e.target.closest(".modal__close") ||
            e.target.closest(".modal__inner-close")
        ) {
            dispatch(toggleShowModal(false));
            document.body.classList.remove("modal-open");
        }
    };

    return (
        <div onClick={(e) => toggleModal(e)} className="modal-wrapper">
            <div className="modal">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 class="modal__title">MG 5</h3>
                    <h4 class="modal__heading">Характеристики</h4>
                    <ul class="modal__info">
                        <li class="modal__info-item">
                            <div class="modal__info-heading">
                                Коробка передач
                            </div>
                            <div class="modal__info-text">{item.box}</div>
                        </li>
                        <li class="modal__info-item">
                            <div class="modal__info-heading">Двигатель</div>
                            <div class="modal__info-text">{item.volume} л</div>
                        </li>
                        <li class="modal__info-item">
                            <div class="modal__info-heading">Год выпуска</div>
                            <div class="modal__info-text">{item.date}.</div>
                        </li>
                        <li class="modal__info-item">
                            <div class="modal__info-heading">Топливо</div>
                            <div class="modal__info-text">{item.engine}</div>
                        </li>
                    </ul>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminModal;
