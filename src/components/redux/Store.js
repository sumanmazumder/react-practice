import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CountReducer";

export const Store = configureStore ({
    reducer: {
        count: counterReducer
    }
})

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;