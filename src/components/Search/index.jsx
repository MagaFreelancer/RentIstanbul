import React from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";
import closeSvg from "../../assets/icons/sm-close.svg";

const Search = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
      console.log(value);
    }, 1000),
    []
  );
  const onChangeSearchValue = (value) => {
    setValue(value);
    updateSearchValue(value);
  };
  const onClickClear = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current.focus();
  };

  React.useEffect(() => {}, []);
  return (
    <div className="cars__top-search">
      <input
        ref={inputRef}
        onChange={(e) => onChangeSearchValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Renault Clio..."
      />
      {value && (
        <img
          onClick={onClickClear}
          className="cars__top-close"
          src={closeSvg}
          alt=""
        />
      )}
    </div>
  );
};

export default Search;
