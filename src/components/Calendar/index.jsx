import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { setDay } from "../../redux/slices/singleInfoSlice";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const month = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Ноябрь",
  "Декабрь",
];
const funcNextDay = () => {
  const currentDate = new Date();

  const currentDay = currentDate.getDate();

  const nextDay = currentDay + 1;

  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(nextDay);
  return tomorrowDate;
};
const Calendar = () => {
  const { days } = useSelector((e) => e.singleInfo);
  const dispatch = useDispatch();

  const DateFilterRef = React.useRef();
  const [date, setDate] = React.useState({
    startDate: new Date(),
    endDate: funcNextDay(),
    key: "selection",
  });
  const [dateText, setDateText] = React.useState({
    startDay: format(date.startDate, "d"),
    endDay: format(date.endDate, "d"),
    startMonth: month[Number(format(date.startDate, "M")) - 1],
    endMonth: month[Number(format(date.endDate, "M")) - 1],
    year: format(date.endDate, "yyyy"),
  });

  const [openDate, setOpenDate] = React.useState(false);
  const hangleChange = (ranges) => {
    setDate(ranges.selection);
  };
  function day(obj) {
    const innerStartDD = format(date.startDate, "dd");
    const innerEndDD = format(date.endDate, "dd");
    const innerStartMM = format(date.startDate, "MM");
    const innerEndMM = format(date.endDate, "MM");

    const date1 = new Date(obj.year + "-" + innerStartMM + "-" + innerStartDD);
    const date2 = new Date(obj.year + "-" + innerEndMM + "-" + innerEndDD);
    const differenceInDays = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

    let result = differenceInDays < 1 ? 1 : Math.round(differenceInDays);
    dispatch(setDay(result));
  }
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const path = event.composedPath ? event.composedPath() : event.path;
      if (!path.includes(DateFilterRef.current)) {
        setOpenDate(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [openDate]);

  React.useEffect(() => {
    setDateText({
      startDay: format(date.startDate, "d"),
      endDay: format(date.endDate, "d"),
      startMonth: month[Number(format(date.startDate, "M")) - 1],
      endMonth: month[Number(format(date.endDate, "M")) - 1],
      year: format(date.endDate, "yyyy"),
    });
    day(date);
  }, [date]);
  return (
    <div className="modal__date modal__col">
      <h4 className="modal__form-title">Дата аренды</h4>
      <div
        onClick={() => setOpenDate(true)}
        ref={DateFilterRef}
        className="modal__date-info"
      >
        <span className="modal__date-date">
          {`${dateText.startDay} ${dateText.startMonth}
           - 
           ${dateText.endDay} ${dateText.endMonth}  ${dateText.year} `}
        </span>
        <span className="modal__date-days">{`${days} Дней`}</span>
        <div className="modal__filter-wrapper">
          <DateRangePicker
            className={`modal__calendar ${
              openDate ? "modal__calendar--active" : ""
            }`}
            ranges={[date]}
            onChange={hangleChange}
            minDate={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
