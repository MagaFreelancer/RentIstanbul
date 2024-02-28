import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";

const Search = () => {
  const [lockValue, setLockValue] = React.useState("");
  const dispatch = useDispatch();
  const text = useSelector((e) => e.filter.searchValue);

  const searchDeb = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));  
    }, 1000),
    []
  );

  const updateSearchValue = (value) => {
    setLockValue(value);
    searchDeb(value);
  };

  return (
    <div className="cars__top-search">
      <input onChange={(event) => updateSearchValue(event.target.value)} value={lockValue} type="text" placeholder="Renault Clio..." />
    </div>
  );
};

export default Search;
