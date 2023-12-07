import { configureStore } from "@reduxjs/toolkit";

import CarsReducer from "./slice/carsSlice";
import formReducer from "./slice/formSlice";

export const store = configureStore({
  reducer: { cars: CarsReducer, form: formReducer },
});
