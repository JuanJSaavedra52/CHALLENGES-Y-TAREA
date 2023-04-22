import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todosApi } from "../api/todosApi";
import { AuthSlice } from "./slices/auth/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    },
})