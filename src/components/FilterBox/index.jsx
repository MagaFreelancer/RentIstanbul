const FilterBox = () => {
    return (
        <div className="cars__radio">
            <h2 className="cars__box">Коробка передач</h2>
            <ul>
              <li className="cars__gearbox">
                <input className="cars__gearbox-radio" id="any" type="radio" defaultValue="any" name="gearbox" defaultChecked/>
                <span className="cars__radio-custom"></span>
                <label className="cars__radio-label" htmlFor="any">Любая</label>
              </li>
              <li className="cars__gearbox">
                <input className="cars__gearbox-radio" id="mechanics" type="radio"  defaultValue="mechanics" name="gearbox"/>
                <span className="cars__radio-custom"></span>
                <label className="cars__radio-label" htmlFor="mechanics">Механика</label>
              </li>
              <li className="cars__gearbox">
                <input className="cars__gearbox-radio" id="auto" type="radio" defaultValue="auto" name="gearbox"/>
                <span className="cars__radio-custom"></span>
                <label className="cars__radio-label" htmlFor="auto">Автомат</label>
              </li>
            </ul>
        </div>
    );
}
 
export default FilterBox;