import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const putCarSlice = createAsyncThunk("cars/putCarSlice", async (props) => {
    axios.post('https://artemwebsites.ru/api/Cars', props).then(response => console.log(response));
});