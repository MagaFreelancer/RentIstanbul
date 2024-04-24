import "./EmptyCars.scss";

const EmptyCars = () => {
    return ( 
        <div className="empty">
            <img className="empty__img" src="https://i.pinimg.com/564x/22/de/2a/22de2a1f15e3f1d115bce35d7eb4bcb3.jpg" alt="список пуст" />
            <h1 className="empty__title">Список машин пуст</h1>
        </div>
    );
}
 
export default EmptyCars;