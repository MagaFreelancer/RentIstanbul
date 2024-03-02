import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrencies, setCurren } from "../../redux/slices/currenciesSlice";

const Currencies = () => {
    const [open, setOpen] = React.useState(false);
    const { curren } = useSelector((state) => state.currencies);
    const dispatch = useDispatch();
    const currenRef = React.useRef();
    const currencies = ['RUB', 'USD', 'TRY'];
   
   
    React.useEffect(() => {
        const handleClickOutside = (event) => {
          const path = event.composedPath ? event.composedPath() : event.path;
          if (!path.includes(currenRef.current)) {
            setOpen(false);
          }
        };
        document.body.addEventListener("click", handleClickOutside);
    
        return () => {
          document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const onClickCurren = (title) => {
        setOpen(false);
        dispatch(setCurren(title))
    }

    return (
        <li ref={currenRef} className="header__currencies">
            <button onClick={() => setOpen(!open)} className="header__currencies-button">{curren}</button>
            <ul className={`header__currencies-list ${open && 'header__currencies-list--active'}`} >
                {currencies.map((item, index) => {
                    return <li onClick={() => onClickCurren(item)} key={index} className={`header__currencies-item${curren === item ? '--active' : ''}`}>{item}</li>
                })}
            </ul>
        </li>
    );
}
 
export default Currencies;