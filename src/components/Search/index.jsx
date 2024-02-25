import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const searchValue = useSelector((e) => e.filter.searchValue);
  console.log(searchValue);
  const dispatch = useDispatch();
  const onChangeSearchValue = (value) => {
    dispatch(setSearchValue(value));
  };
  return (
    <div className="cars__top-search">
      <input
        onChange={(e) => onChangeSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Renault Clio..."
      />
    </div>
  );
};

export default Search;
