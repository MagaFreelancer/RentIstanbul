import React from "react";
import russia from "../../assets/icons/russia.png";
import turkey from "../../assets/icons/turkey.png";
import america from "../../assets/icons/america.png";
import { useTranslation } from "react-i18next";
import "./Languages.scss";

const Languages = () => {
    const { i18n } = useTranslation();
    const [openWindow, setOpenWindow] = React.useState(false);
    const [lang, setLang] = React.useState({
        country: 'Россия', flag: russia, code: 'RU'
    });
    const windowRef = React.useRef();
   
    React.useEffect(() => {
        const handleClickOutside = (event) => {
          const path = event.composedPath ? event.composedPath() : event.path;
          if (!path.includes(windowRef.current)) {
            setOpenWindow(false);
          }
        };
        document.body.addEventListener("click", handleClickOutside);
    
        return () => {
          document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const onChangeCount = (obj) => {
        i18n.changeLanguage(obj.code);
        setLang(obj);
        setOpenWindow(false);
    }

    const countries = [
        {country: 'Россия', flag: russia, code: 'ru'},
        {country: 'English', flag: america, code: 'en'},
        {country: 'Turkey', flag: turkey, code: 'tr'}
    ];

    return (
        <div ref={windowRef} className="languages">
            <button onClick={() => setOpenWindow(!openWindow)} className="languages__button">{lang.code.toUpperCase()}</button>
            <ul className={`languages__window ${openWindow ? `languages__window--active` : ''}`}>
                {countries.map((item, index) => {
                    return <li onClick={() => onChangeCount(item)} key={index} className="languages__item">
                        <img className="languages__item-img" src={item.flag} />
                        {item.country}
                    </li>
                })}
            </ul>
        </div>
    );
}
 
export default Languages;