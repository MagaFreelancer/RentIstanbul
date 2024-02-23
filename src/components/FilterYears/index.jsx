import React from "react";

const FilterYears = () => {
    const [yearCar, setYearCar] = React.useState({
        type: 1970, title: '1970+'
    });
    
    const listYears = [
        {type: 1970, title: '1970+'},
        {type: 1971, title: '1971+'},
        {type: 1972, title: '1972+'},
        {type: 1973, title: '1973+'},
        {type: 1974, title: '1974+'},
        {type: 1975, title: '1975+'},
        {type: 1976, title: '1976+'},
        {type: 1977, title: '1977+'},
        {type: 1978, title: '1978+'},
        {type: 1979, title: '1979+'},
        {type: 1980, title: '1980+'},
        {type: 1981, title: '1981+'},
        {type: 1982, title: '1982+'},
        {type: 1983, title: '1983+'},
        {type: 1984, title: '1984+'},
        {type: 1985, title: '1985+'},
        {type: 1986, title: '1986+'},
        {type: 1987, title: '1987+'},
        {type: 1988, title: '1988+'},
        {type: 1989, title: '1989+'},
        {type: 1990, title: '1990+'},
        {type: 1991, title: '1991+'},
        {type: 1992, title: '1992+'},
        {type: 1993, title: '1993+'},
        {type: 1994, title: '1994+'},
        {type: 1995, title: '1995+'},
        {type: 1996, title: '1996+'},
        {type: 1997, title: '1997+'},
        {type: 1998, title: '1998+'},
        {type: 1999, title: '1999+'},
        {type: 2000, title: '2000+'},
        {type: 2001, title: '2001+'},
        {type: 2002, title: '2002+'},
        {type: 2003, title: '2003+'},
        {type: 2004, title: '2004+'},
        {type: 2005, title: '2005+'},
        {type: 2006, title: '2006+'},
        {type: 2007, title: '2007+'},
        {type: 2008, title: '2008+'},
        {type: 2009, title: '2009+'},
        {type: 2010, title: '2010+'},
        {type: 2011, title: '2011+'},
        {type: 2012, title: '2012+'},
        {type: 2013, title: '2013+'},
        {type: 2014, title: '2014+'},
        {type: 2015, title: '2015+'},
        {type: 2016, title: '2016+'},
        {type: 2017, title: '2017+'},
        {type: 2018, title: '2018+'},
        {type: 2019, title: '2019+'},
        {type: 2020, title: '2020+'},
        {type: 2021, title: '2021+'},
        {type: 2022, title: '2022+'},
        {type: 2023, title: '2023+'},
        {type: 2024, title: '2024+'},
    ];

    console.log(yearCar);

  
    return (
        <div className="cars__years">
            <h2 className="cars__years-title">Год выпуска</h2>
            <ul className="cars__years-list">
                {listYears.map((year) => {
                    return (
                        <li onClick={() => setYearCar(year)} 
                            key={year.type} 
                            className={`cars__years-item ${year.type === yearCar.type ? 'cars__years-item--active' : ''}`}>
                            {year.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default FilterYears;
