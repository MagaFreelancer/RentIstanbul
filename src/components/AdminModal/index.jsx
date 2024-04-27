import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCar,
  toggleShowModal,
} from "../../redux/slices/singleInfoSlice";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getCarsNodFilter } from "../../redux/requests/getCars";

const AdminModal = () => {
  const dispatch = useDispatch();
  const { days, item, id, status } = useSelector((e) => e.singleInfo);
  const { showModal } = useSelector((state) => state.singleInfo);

  const removeCar = (event) => {
    event.preventDefault();

    const host = "https://artemwebsites.ru/";
    const deleteUrl = host + `api/Cars/${id}`;
    const token = localStorage.getItem("tokenInfo");

    axios
      .delete(deleteUrl, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function () {
        dispatch(toggleShowModal(false));
        document.body.classList.remove("modal-open");
      })
      .catch(function (error) {
        console.error("Ошибка!", error);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const getSingleCar = async () => {
    dispatch(fetchSingleCar(id));
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  React.useEffect(() => {
    getSingleCar();
  }, []);
  React.useEffect(() => {
    if (status === "success") {
      setValue("title", item.title);
      setValue("engineType", item.engineType);
      setValue("year", item.year);
      console.log(item);
      handleSubmit(onSubmit)();
    }
  }, [status]);
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

  if (status !== "success" && id !== null) {
    return "";
  }
  return (
    <div onClick={(e) => toggleModal(e)} className="modal-wrapper">
      <div className="modal">
        <div className="modal__close">
          <svg
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m137.051 128 75.475-75.475c2.5-2.5 2.5-6.551 0-9.051s-6.551-2.5-9.051 0L128 118.949 52.525 43.475c-2.5-2.5-6.551-2.5-9.051 0s-2.5 6.551 0 9.051L118.949 128l-75.475 75.475a6.399 6.399 0 0 0 4.525 10.926 6.38 6.38 0 0 0 4.525-1.875L128 137.051l75.475 75.475c1.25 1.25 2.888 1.875 4.525 1.875s3.275-.625 4.525-1.875c2.5-2.5 2.5-6.551 0-9.051L137.051 128z"
              fill="#ffffff"
              className="fill-000000"
            ></path>
          </svg>
        </div>
        <form>
          <h3 className="modal__title">MG 5</h3>
          <h4 className="modal__heading">Характеристики</h4>
          <ul className="modal__info">
            <li className="modal__info-item">
              <div className="modal__info-heading">Машина</div>
              <input
                className="modal__info-input"
                {...register("title")}
                type="input"
              />
            </li>
            <li className="modal__info-item">
              <div className="modal__info-heading">Двигатель</div>
              <input
                className="modal__info-input"
                type="input"
                {...register("engineType")}
              />
            </li>
            <li className="modal__info-item">
              <div className="modal__info-heading">Год выпуска</div>
              <input
                className="modal__info-input"
                type="input"
                {...register("year")}

              />
            </li>
            <li className="modal__info-item">
              <div className="modal__info-heading">Топливо</div>
              <input
                className="modal__info-input"
                type="input"
                defaultValue={item.engine}
              />
            </li>
            <li className="modal__info-item">
              <div className="modal__info-heading">Цена</div>
              <input
                className="modal__info-input"
                type="input"
                defaultValue={item.price}
              />
            </li>
          </ul>

          <div className="modal__block-button">
            <button className="modal__change-button">Изменить</button>
            <button
              onClick={(event) => removeCar(event)}
              className="modal__delete-button"
            >
              Delete car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
