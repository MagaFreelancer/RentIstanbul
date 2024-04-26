import React from "react";
import { FilterSort, RequestCar } from "../../components";
import "./Requests.scss";
import axios from "axios";

const listSort = [
  { name: "От дешевых к дорогим", sortProperty: "-price" },
  { name: "От дорогих к дешевым", sortProperty: "price" },
];
const Requests = () => {
  const [requests, setRequests] = React.useState([]);
  const [sortActiveObj, setSortActiveObj] = React.useState({
    name: "От дешевых к дорогим",
    sortProperty: "-price",
  }); //для obj для sortFilter
  const onChangeSort = (obj) => {
    setSortActiveObj(obj);
  };
  async function getRequests() {
    const token = localStorage.getItem("tokenInfo");
    const { data } = await axios.get("https://artemwebsites.ru/orders/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRequests(data);
  }
  React.useEffect(() => {
    getRequests();
  }, []);
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
          {requests.map((item, index) => (
            <RequestCar key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requests;
