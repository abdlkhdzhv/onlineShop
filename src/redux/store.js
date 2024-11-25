import { configureStore } from "@reduxjs/toolkit";
import { priceReducer } from "./priceReducer";


const store = configureStore({
    reducer: {
        price: priceReducer
    }
})

export default store