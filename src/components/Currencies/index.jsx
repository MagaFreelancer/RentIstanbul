import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { setCurren } from "../../redux/slices/currenciesSlice";
import rublIcon from "../../assets/icons/currencies/rubl-icon.png";
import rublWhiteIcon from "../../assets/icons/currencies/rubl-white.png";
import dollorIcon from "../../assets/icons/currencies/dollor-icon.png";
import dollorWhiteIcom from "../../assets/icons/currencies/dollor-white.png";
import lirIcon from "../../assets/icons/currencies/lir-icon.png";
import lirWhiteIcon from "../../assets/icons/currencies/lir-white.png";
import euroIcon from "../../assets/icons/currencies/euro-icon.png";
import euroWhiteIcon from "../../assets/icons/currencies/euro-white.png";

const Currencies = (props) => {
    const [open, setOpen] = React.useState(false);
    const { curren } = useSelector((state) => state.currencies);
    const dispatch = useDispatch();
    const currenRef = React.useRef();
    const currencies = [
        {curr: 'RUB', img: rublIcon},
        {curr: 'USD', img: dollorIcon},
        {curr: 'EUR', img: euroIcon},
        {curr: 'TRY', img: lirIcon}
    ];
    const currIcons = {
        RUB: rublWhiteIcon,
        USD: dollorWhiteIcom,
        EUR: euroWhiteIcon,
        TRY: lirWhiteIcon
    }
   
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
        props.setOpen(false);
        dispatch(setCurren(title))
    }

    return (
        <li ref={currenRef} className="header__currencies">
            <button onClick={() => setOpen(!open)} className="header__currencies-button"><img className="header__currencies-cur" src={currIcons[curren]} alt="" /></button>
            <ul className={`header__currencies-list ${open && 'header__currencies-list--active'}`} >
                {currencies.map((item, index) => {
                    return (
                        <li 
                            onClick={() => onClickCurren(item.curr)} 
                            key={index} 
                            className={`header__currencies-item ${curren === item.curr ? 'header__currencies-item--active' : ''}`}>
                            <img className="header__currencies-icon" src={item.img} alt={item.curr} />
                            {item.curr}
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}
 
export default Currencies;