import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./CountReducer";

export const store = configureStore({
    reducer: {
        count: CountReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;