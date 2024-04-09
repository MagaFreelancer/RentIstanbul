import React from "react";
import { FilterSort, RequestCar } from "../../components";
import "./Requests.scss";

const listSort = [
  { name: "От дешевых к дорогим", sortProperty: "-price" },
  { name: "От дорогих к дешевым", sortProperty: "price" },
];
const Requests = () => {
  const [sortActiveObj, setSortActiveObj] = React.useState({
    name: "От дешевых к дорогим",
    sortProperty: "-price",
  }); //для obj для sortFilter
  const onChangeSort = (obj) => {
    setSortActiveObj(obj);
  };
  return (
    <div className="requests">
      <div className="container requests__container">
        <div className=" requests__heading">
          <h1>Заявки</h1>
          <FilterSort
            sortActiveObj={sortActiveObj}
            listSort={listSort}
            onChangeSort={(value) => onChangeSort(value)}
          />
        </div>
        <ul className="requests__list">
          <RequestCar />
          <RequestCar />
          <RequestCar />
        </ul>
      </div>
    </div>
  );
};

export default Requests;
