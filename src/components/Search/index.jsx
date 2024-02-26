import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const text = useSelector((e) => e.filter.searchValue);
  
  const onChangeValue = (value) => {
    dispatch(setSearchValue(value));  
  };

  return (
    <div className="cars__top-search">
      <input onChange={(event) => onChangeValue(event.target.value)} value={text} type="text" placeholder="Renault Clio..." />
    </div>
  );
};

export default Search;
