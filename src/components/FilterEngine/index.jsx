import React from "react";

const FilterEngine = () => {
    const [checkBox, setCheckBox] = React.useState([
        {gearbox: 'petrol', title: 'Бензин'}
    ]);

    const gearboxs = [
        {gearbox: 'petrol', title: 'Бензин'},
        {gearbox: 'diesel', title: 'Дизель'},
        {gearbox: 'electro', title: 'Электо/Гибрид'},
    ];

    const onClickCheckbox = (obj) => {
       console.log(obj);
    }

    return (
        <div className="cars__engine">
            <h2 className="cars__box">Двигатель</h2>
            <ul>
                {gearboxs.map((obj, index) => {
                    return <li onClick={() => onClickCheckbox(obj)} className="cars__gearbox" key={index}>
                    <input className={`cars__gearbox-checkbox ${obj.gearbox === checkBox[0].gearbox ? 'cars__gearbox-checkbox--active' : ''}`} id={obj.gearbox} type="checkbox" value={obj.gearbox}/>
                    <span className="cars__gearbox-custom"></span>
                    <label className="cars__gearbox-label" htmlFor={obj.gearbox}>{obj.title}</label>
                  </li>
                })}
            </ul>
        </div>
    );
}
 
export default FilterEngine;