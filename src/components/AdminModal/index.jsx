import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSingleCar,
    toggleShowModal,
} from "../../redux/slices/singleInfoSlice";
import { useForm } from "react-hook-form";

const AdminModal = () => {
    const dispatch = useDispatch();
    const { days, item, id, status } = useSelector((e) => e.singleInfo);
    const onSubmit = (data) => {
        console.log(data);
    };

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

    if(status !== 'success') {
        return '';
    }

    return (
        <div onClick={(e) => toggleModal(e)} className="modal-wrapper">
            <div className="modal">
                <div className="modal__close">
                    <svg viewBox="0 0 256 256" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path d="m137.051 128 75.475-75.475c2.5-2.5 2.5-6.551 0-9.051s-6.551-2.5-9.051 0L128 118.949 52.525 43.475c-2.5-2.5-6.551-2.5-9.051 0s-2.5 6.551 0 9.051L118.949 128l-75.475 75.475a6.399 6.399 0 0 0 4.525 10.926 6.38 6.38 0 0 0 4.525-1.875L128 137.051l75.475 75.475c1.25 1.25 2.888 1.875 4.525 1.875s3.275-.625 4.525-1.875c2.5-2.5 2.5-6.551 0-9.051L137.051 128z" fill="#ffffff" className="fill-000000"></path>
                    </svg>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="modal__title">MG 5</h3>
                    <h4 className="modal__heading">Характеристики</h4>
                    <ul className="modal__info">
                        <li className="modal__info-item">
                            <div className="modal__info-heading">
                                Коробка передач
                            </div>
                            <input className="modal__info-input" type="input" defaultValue={item.title} 
                                {...register('title', {
                                    required: 'Пожалуйста, заполните поле',
                                    minLength: {
                                        value: 4,
                                        message: 'миниму 4 символов'
                                    }
                                })} 
                            />
                        </li>
                        <li className="modal__info-item">
                            <div className="modal__info-heading">Двигатель</div>
                            <input className="modal__info-input" type="input" defaultValue={item.volume} 
                                {...register('volume', {
                                    required: 'Пожалуйста, заполните поле',
                                    minLength: {
                                        value: 2,
                                        message: 'миниму 4 символов'
                                    }
                                })} 
                            />
                        </li>
                        <li className="modal__info-item">
                            <div className="modal__info-heading">Год выпуска</div>
                            <input className="modal__info-input" type="input" defaultValue={item.date} 
                                {...register('date', {
                                    required: 'Пожалуйста, заполните поле',
                                    minLength: {
                                        value: 4,
                                        message: 'миниму 4 символов'
                                    }
                                })} 
                            />
                        </li>
                        <li className="modal__info-item">
                            <div className="modal__info-heading">Топливо</div>
                            <input className="modal__info-input" type="input" defaultValue={item.engine} 
                                {...register('engine', {
                                    required: 'Пожалуйста, заполните поле',
                                    minLength: {
                                        value: 4,
                                        message: 'миниму 4 символов'
                                    }
                                })} 
                            />
                        </li>
                        <li className="modal__info-item">
                            <div className="modal__info-heading">Цена</div>
                            <input className="modal__info-input" type="input" defaultValue={item.price} 
                                {...register('price', {
                                    required: 'Пожалуйста, заполните поле',
                                    minLength: {
                                        value: 2,
                                        message: 'миниму 4 символов'
                                    }
                                })} 
                            />
                        </li>
                    </ul>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminModal;
