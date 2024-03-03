import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <section className="about__company">
                <div className="container">
                    <h1 className="about__company-title title">О нас и нашей компании</h1>
                    <p className="about__company-subtitle">Localrent.com – это агрегатор локальных прокатных компаний. Мы находим небольшие прокаты, которые работают только в своем городе, выбираем лучших из них и контролируем качество их работы.<br></br><br></br> А наши клиенты, арендуя любой из автомобилей, получают стандартную услугу высокого качества.</p>
                </div>
            </section>
            <section className="about__director">
                <div className="container">
                    <div className="about__prof">
                        <h4 className="about__prof-fullname">Кирилл Антошин</h4>
                        <p className="about__prof-jobtitle">Директор компании</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default About;