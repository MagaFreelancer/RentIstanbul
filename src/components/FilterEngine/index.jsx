const FilterEngine = () => {
    return (
        <div className="cars__engine">
            <h2 className="cars__box">Двигатель</h2>
            <ul>
                <li className="cars__gearbox">
                  <input className="cars__gearbox-checkbox" id="petrol" type="checkbox" defaultValue="petrol" defaultChecked/>
                  <span className="cars__gearbox-custom"></span>
                  <label className="cars__gearbox-label" htmlFor="petrol">Бензин</label>
                </li>
                <li className="cars__gearbox">
                  <input className="cars__gearbox-checkbox" id="diesel" type="checkbox" defaultValue="diesel"/>
                  <span className="cars__gearbox-custom"></span>
                  <label className="cars__gearbox-label" htmlFor="diesel">Дизель</label>
                </li>
                <li className="cars__gearbox">
                  <input className="cars__gearbox-checkbox" id="electro" type="checkbox" defaultValue="electro"/>
                  <span className="cars__gearbox-custom"></span>
                  <label className="cars__gearbox-label" htmlFor="electro">Электо/Гибрид</label>
                </li>
            </ul>
        </div>
    );
}
 
export default FilterEngine;