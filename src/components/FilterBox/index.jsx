const FilterBox = () => {
    return (
        <div className="cars__radio">
            <h2 className="cars__box">Коробка передач</h2>
            <ul>
              <li className="cars__gearbox">
                <input id="any" type="radio" defaultValue="any" name="gearbox" defaultChecked/>
                <label htmlFor="any">Любая</label>
              </li>
              <li className="cars__gearbox">
                <input id="mechanics" type="radio"  defaultValue="mechanics" name="gearbox"/>
                <label htmlFor="mechanics">Механика</label>
              </li>
              <li className="cars__gearbox">
                <input id="auto" type="radio" defaultValue="auto" name="gearbox"/>
                <label htmlFor="auto">Автомат</label>
              </li>
            </ul>
        </div>
    );
}
 
export default FilterBox;