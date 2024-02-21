import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const FormReserv = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [place, setPlace] = React.useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  return (
    <form className="car-page__form" onSubmit={handleSubmit(onSubmit)}>
      <label>Ваши данные</label>
      <input
        className="car-page__field"
        placeholder="Имя"
        {...register("firstName", {})}
      />
      <input
        className="car-page__field"
        placeholder="Фамилия"
        {...register("lastName", {})}
      />
      <input className="car-page__field" type="date" {...register("age")} />
      <input
        className="car-page__field"
        placeholder="Почта"
        {...register("email")}
      />
      <input
        className="car-page__field"
        placeholder="Номер телефон"
        type="tel"
        {...register("number")}
      />
      <textarea
        className="car-page__field"
        placeholder="Комментарий"
        {...register("comment")}
      />
      <label>Получение</label>
      <Box sx={{ minWidth: 120, marginBottom: 2.5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Получение</InputLabel>
          <Select
            {...register("place")}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={place}
            label="Получение"
            onChange={handleChange}
          >
            <MenuItem value={"office"}>Офис проката</MenuItem>
            <MenuItem value={"delivery"}>Доставка по городу + 50$</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button className="car-page__submit" variant="contained" type="text">
        Отправить
      </Button>
    </form>
  );
};
export default FormReserv;
