import { configureStore } from "@reduxjs/toolkit";
import { } from "./mainSlice";

export const store = configureStore({
    reducer: {
        
    }
})

export type RootState = ReturnType<typeof store.getState>