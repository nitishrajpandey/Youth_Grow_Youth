import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
const myStore = configureStore({
    reducer: {
        menu: menuReducer
    }
})

export default myStore